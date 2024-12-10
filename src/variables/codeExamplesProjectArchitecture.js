const CodeExamplesProjectArchitecture = {
  normalMode: `import React, { useContext, useEffect, useState } from 'react';
    import AsyncStorage from '@react-native-community/async-storage';
    import { NativeModules } from 'react-native';
    
    import { AuthContext } from '@Context';
    import { createTable, dropUser, sairDaCarga } from '@db/sqlite/db';
    import { selectAppCarga, handleCargaEnd } from '@db/sqlite/queries';
    import { getSync } from 'db/sqlite/synchronizer';
    
    import { Container, Button, TextBtn, ContainerRow, ContentMain, ContainerScroll } from '@styles/styledComponents';
    import R from '@styles/R';
    import components from '@components/all';
    
    //=========================================================================================================
    const { UserHeader, Header, RowInfo, LoadingScreen, ResetPasswordModal, } = components;
    
    //=========================================================================================================
    function Profile({ navigation }) {
      const { signOut, getViagem } = useContext(AuthContext);
      const [IDG046, setIDG046] = useState(false);
      const [motorista, setMotorista] = useState({});
      const [showModal, setShowModal] = useState(false);
      const [loading, setLoading] = useState(false);
      const [showOcorrencia, setShowOcorrencia] = useState(false);
      const [endCarga, setEndCarga] = useState(0);
      const [ENDED_CARGA, setENDED_CARGA] = useState(false);
      const { version } = require('../../../package.json');
    
      //==================================================================================================
      useEffect(() => {
        selectAppCarga().then(app => {
          if (app[1] != undefined) {
            setIDG046(app[1].IDG046);
            setShowOcorrencia(true);
          }
          setMotorista(app[0])
        })
    
        checkCarga();
      }, []);
    
      //==================================================================================================
      async function logout() {
        await dropUser().then(async dropped => {
          await sairDaCarga().then(async dropped => {
            await createTable().then(async created => {
              await NativeModules.LocationManager.stopBackgroundLocation();
              signOut();
            });
          });
        }).catch(err => console.log(err))
      }
    
      //==================================================================================================
      async function handleCarga() {
        await handleCargaEnd(IDG046).then(async end => {
          await sairDaCarga().then(async dropped => {
            await createTable().then(async created => {
              setIDG046(false);
              await NativeModules.LocationManager.stopBackgroundLocation();
              getViagem();
            });
          });
        })
      }
    
      //==================================================================================================
      async function saveCarga() {
        setLoading(true);
        await handleCargaEnd(IDG046).then(async end => {
          await sairDaCarga().then(async dropped => {
            await createTable().then(async created => {
              setIDG046(false);
              await getSync().catch(error => console.log("SAVE_CARGA_GETSYNC_ERROR: ", error));
              setLoading(false);
              getViagem();
            });
          });
        })
      }
    
      //==================================================================================================
      async function checkCarga() {
        let endCarga = await AsyncStorage.getItem("@ST_CARGA");
        let ENDED_CARGA = await AsyncStorage.getItem("@ENDED_CARGA");
        setEndCarga(endCarga);
        setENDED_CARGA(ENDED_CARGA);
      }
    
      //==================================================================================================
      return (
        <Container>
          {loading &&
            <LoadingScreen title="Salvando..." />
          }
    
          <Header />
    
          <ContentMain>
            <ContainerScroll
              showsVerticalScrollIndicator={false}>
              <Container>
                <Container
                  marginRight="15px"
                  marginLeft="15px">
    
                  <UserHeader
                    width={90}
                    padding={12}
                    size={60}
                    carga={{ IDG046: IDG046 }}
                    label={motorista.NMMOTORI}
                    icon="user" />
                </Container>
    
                <Container marginTop="30px">
    
                  <RowInfo label={'Matrícula: '} text={motorista.NRMATRIC} />
                  <RowInfo label={'Número Evolog: '} text={motorista.IDG031} />
                  <RowInfo label={'CPF: '} text={motorista.CJMOTORI} />
                  <RowInfo label={'Versão: '} text={version} />
    
                </Container>
              </Container>
    
              <Container marginTop="30px">
                <ContainerRow
                  justifyContent="center"
                  marginLeft="25px"
                  marginRight="25px">
                  <Button
                    backgroundColor={R.colors.secondary}
                    onPress={() => setShowModal(true)}
                    activeOpacity={0.7}>
                    <TextBtn color={R.colors.white}>Alterar Senha</TextBtn>
                  </Button>
                </ContainerRow>
    
                {IDG046 && endCarga ?
                  endCarga != 'D'
                    ?
                    <ContainerRow
                      justifyContent="center"
                      marginLeft="25px"
                      marginRight="25px">
                      <Button
                        backgroundColor={R.colors.primary}
                        onPress={() => handleCarga()}
                        activeOpacity={0.7}>
                        <TextBtn color={R.colors.white}>Sair da Carga</TextBtn>
                      </Button>
                    </ContainerRow>
                    :
                    IDG046 && ENDED_CARGA == 'false' &&
                    <ContainerRow
                      justifyContent="center"
                      marginLeft="25px"
                      marginRight="25px">
                      <Button
                        backgroundColor={R.colors.primary}
                        onPress={() => saveCarga()}
                        activeOpacity={0.7}>
                        <TextBtn color={R.colors.white}>Salvar Carga</TextBtn>
                      </Button>
                    </ContainerRow>
                  :
                  null
                }
    
                <ContainerRow
                  justifyContent="center"
                  marginLeft="25px"
                  marginRight="25px">
                  <Button
                    backgroundColor={R.colors.red}
                    onPress={() => logout()}
                    activeOpacity={0.7}>
                    <TextBtn color={R.colors.white}>Logout</TextBtn>
                  </Button>
                </ContainerRow>
    
                {showModal &&
                  <ResetPasswordModal
                    openCloseModal={() => setShowModal(!showModal)}
                  />
                }
    
              </Container>
            </ContainerScroll>
          </ContentMain>
        </Container >
      )
    }
    
    export default Profile;`,

  ourModeView: `
    import React from 'react';
    import { FlatList, View, Text, StatusBar } from 'react-native';
    import {
        Container,
        ContainerRow,
        Title,
        TextContainer,
        ContentMain,
        ContainerScroll,
        ContainerWrapper,
        Card,
        Hr,
        Btn,
    } from '@styles/styledComponents';
    import R from '@styles/R';
    import components from '@components/all';
    
    import LinearGradient from 'react-native-linear-gradient';
    import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
    
    // ---- Importação dos hooks globais
    import { useLogout } from '@hooks/index';
    
    import { env } from '@config/env';
    
    import Icon from 'react-native-vector-icons/FontAwesome5';
    // ---- Importação dos nosso hooks da parte lógica.
    import { useSharedState, useInit } from './logic';
    
    const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
    
    //= ========================================================================================================
    // Extração dos componentes que vamos utilizar na nossa tela
    const {
        Header,
        LoadingScreen,
        ResetPasswordModal,
        InputLabel,
        BtnCircle,
        BtnSettings,
        BottomHalfModal,
    } = components;
    
    const { version } = require('../../../package.json');
    
    //= ========================================================================================================
    function Profile({ navigation }) {
        // ---- Extração de useSharedState tudo que queremos utilizar na parte visual ao invés de definir os states aqui dentro.
        const {
            IDG046,
            motorista,
            showModal,
            setShowModal,
            loading,
            endCarga,
            OPERATION,
            showConfirmationModal,
            setShowConfirmationModal,
        } = useSharedState();
    
        // ---- Registro dos hooks que essa tela utilizará..
        // ---- Register Hooks -----
        
        // ---- Hooks que utilizam useEffect não precisam ser instanciados
        useInit();

        // ---- Hooks que utilizam useCallback precisam ser instanciados e então usaremos sua instancia onde precisarmos.
        const logout = useLogout();
    
        //= ========================================================================================================
        const messageIndex = { SAIR_APP: 0 };
    
        //= ========================================================================================================
        const messageConfirmations = [
            {
                index: messageIndex.SAIR_APP,
                title: 'Confirmação',
                message: %Você realmente deseja sair do Evolog Motorista? |{
                    IDG046 && endCarga && endCarga != 'D'
                        ? 'Todos os dados que ainda não foram sincronizados serão perdidos.'
                        : ''
                }%,
                action: () => logout(),
            },
        ];
    
        //= ========================================================================================================
        const modules = [
            {
                onSubmit: () => navigation.navigate('UpdateRegistration'),
                label: 'Atualizar Cadastro',
                icon: 'edit',
                enabled: true,
                accessibilityLabel: '',
            },
            {
                onSubmit: () => navigation.navigate('OperationHandler'),
                label: 'Adicionar Operação',
                icon: 'plus',
                enabled: true,
                accessibilityLabel: 'BUTTON_MODULE_ADD_OPERATION',
            },
            {
                onSubmit: () => navigation.navigate('UpdatePassword'),
                label: 'Alterar Senha',
                icon: 'pen',
                enabled: true,
                accessibilityLabel: 'BUTTON_MODULE_UPDATE_DSSENHA',
            },
        ];
    
        //= ========================================================================================================
        const settings = [
            {
                onSubmit: () => navigation.navigate('Security'),
                label: 'Segurança',
                accessibilityLabel: 'BUTTON_SETTINGS_SECURITY',
            },
            {
                onSubmit: () =>
                    setShowConfirmationModal({ visible: true, messageIndex: messageIndex.SAIR_APP }),
                label: 'Sair do Aplicativo',
                accessibilityLabel: 'BUTTON_SETTINGS_EXIT_APP',
            },
            {
                onSubmit: () => navigation.navigate('PrivacyPolicy'),
                label: 'Política de Privacidade',
                accessibilityLabel: 'BUTTON_SETTINGS_PRIVACY_POLICY',
            },
            {
                onSubmit: () => null,
                label: %|{env.NAME}.|{version}%,
                noIcon: true,
                disabled: true,
                labelColor: R.colors.regular,
                accessibilityLabel: 'LABEL_VERSION',
            },
        ];
    
        //= ========================================================================================================
        // ---- Tendo as diversas partes da nossa tela divididas em funções, conseguimos, bater o olho e enxergar
        // ---- do que se trata cada componente da nossa tela.
        function renderButtonModules(obj) {
            const { item } = obj;
    
            if (item?.condition == undefined ? true : item.condition) {
                return (
                    <BtnCircle
                        accessibilityLabel={item.accessibilityLabel}
                        onSubmit={item.onSubmit}
                        label={item.label}
                        icon={item.icon}
                        size={28}
                        empty={item.empty}
                        enabled={item.enabled}
                    />
                );
            }
        }
    
        //= ==========================================================================================
        function renderButtonSettings(obj) {
            const { item } = obj;
    
            return (
                <BtnSettings
                    accessibilityLabel={item.accessibilityLabel}
                    onSubmit={item.onSubmit}
                    label={item.label}
                    noIcon={item?.noIcon}
                    disabled={item?.disabled}
                    labelColor={item?.labelColor}
                />
            );
        }
    
        //= ==========================================================================================
        function renderModules() {
            return (
                <View
                    style={{
                        marginTop: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={modules}
                        keyExtractor={(item) => item.icon}
                        renderItem={(item) => renderButtonModules(item)}
                    />
                </View>
            );
        }
    
        //= =================================================================================================
        function renderSettings() {
            return (
                <ContainerWrapper marginTop="10px" marginBottom="10px">
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <Hr />}
                        data={settings}
                        keyExtractor={(item) => item.icon}
                        renderItem={(item) => renderButtonSettings(item)}
                    />
                </ContainerWrapper>
            );
        }
    
        //= =================================================================================================
        function renderModal() {
            if (showModal) {
                return <ResetPasswordModal openCloseModal={() => setShowModal(!showModal)} />;
            }
        }
    
        //= =================================================================================================
        function renderOperations() {
            if (OPERATION?.length > 0) {
                return OPERATION.map((item) => (
                    <ContainerRow
                        key={item?.DSOPERAC}
                        backgroundColor={R.colors.lightGray}
                        paddingTop="3px"
                        paddingBottom="3px"
                        borderRadius="15px"
                        marginBottom="10px">
                        <TextContainer>{item?.DSOPERAC}</TextContainer>
                    </ContainerRow>
                ));
            }
    
            if (OPERATION?.length == 0)
                return (
                    <ContainerRow
                        borderRadius="10px"
                        backgroundColor={R.colors.lightGray}
                        paddingTop="3px"
                        paddingBottom="5px"
                        paddingRight="20px"
                        paddingLeft="20px"
                        marginBottom="10px">
                        <Title weight="300" font="16px" align="left">
                            Nenhuma operação cadastrada
                        </Title>
                    </ContainerRow>
                );
    
            return (
                <ShimmerPlaceHolder
                    style={{
                        width: '100%',
                        paddingVertical: 0,
                        flex: 1,
                        height: 30,
                        marginBottom: 10,
                        borderRadius: 10,
                    }}
                    LinearGradient={LinearGradient}
                    visible={OPERATION}>
                    <ContainerRow
                        backgroundColor={R.colors.lightGray}
                        paddingTop="3px"
                        paddingBottom="3px"
                        marginBottom="10px">
                        <View style={{ width: '95%' }}>
                            <Title align="left" left="15px" color={R.colors.regular}>
                                Shimmer
                            </Title>
                        </View>
                    </ContainerRow>
                </ShimmerPlaceHolder>
            );
        }
    
        //= =================================================================================================
        function renderInfo() {
            return (
                <Container marginTop="10px" paddingLeft="10px" paddingRight="10px">
                    <ContainerRow>
                        <InputLabel
                            editable
                            value={motorista?.NRMATRIC || 'n.i'}
                            label="Matrícula"
                            name="nome"
                            valid
                            loading={!OPERATION}
                            accessibilityLabel="LABEL_MATRICULA"
                        />
                        <InputLabel
                            editable
                            value={motorista?.IDG031}
                            label="ID. Motorista"
                            name="nome"
                            valid
                            loading={!OPERATION}
                            accessibilityLabel="LABEL_IDG031"
                        />
                    </ContainerRow>
    
                    <ContainerRow>
                        <InputLabel
                            editable
                            value={motorista?.CJMOTORI}
                            label="CPF"
                            name="nome"
                            valid
                            loading={!OPERATION}
                            accessibilityLabel="LABEL_CJMOTORI"
                        />
    
                        {IDG046 && (
                            <InputLabel
                                editable
                                value={IDG046}
                                label="Carga"
                                name="nome"
                                valid
                                loading={!OPERATION}
                                accessibilityLabel="LABEL_IDG046"
                            />
                        )}
                    </ContainerRow>
    
                    <Title font="16px" weight="400" bottom="5px" align="left" color={R.colors.dark}>
                        Operações
                    </Title>
    
                    {renderOperations()}
                </Container>
            );
        }
    
        //= =================================================================================================
        function renderModalConfirmation() {
            return (
                <BottomHalfModal
                    onBackdropPress={() =>
                        setShowConfirmationModal({ visible: false, messageIndex: 0 })
                    }
                    onSwipeComplete={() =>
                        setShowConfirmationModal({ visible: false, messageIndex: 0 })
                    }
                    isVisible={showConfirmationModal.visible}
                    onDismiss={() => setShowConfirmationModal({ visible: false, messageIndex: 0 })}
                    showCloseBtn
                    content={() => (
                        <>
                            <ContainerRow>
                                <Title weight="500" top="5px" font="20px" color={R.colors.black}>
                                    {messageConfirmations[showConfirmationModal.messageIndex].title}
                                </Title>
                                {messageConfirmations[showConfirmationModal.messageIndex]?.icon && (
                                    <Icon
                                        style={{ marginTop: 5, marginLeft: 5 }}
                                        name={
                                            messageConfirmations[showConfirmationModal.messageIndex]
                                                .icon
                                        }
                                        size={26}
                                        color={R.colors.green}
                                    />
                                )}
                            </ContainerRow>
    
                            <Title weight="500" top="10px" font="16px" color={R.colors.black}>
                                {messageConfirmations[showConfirmationModal.messageIndex].message}
                            </Title>
    
                            <Btn
                                onPress={
                                    messageConfirmations[showConfirmationModal.messageIndex].action
                                }
                                style={{
                                    borderRadius: 10,
                                    backgroundColor: R.colors.black,
                                    marginTop: 20,
                                    paddingBottom: 10,
                                    paddingTop: 5,
                                    width: '70%',
                                }}>
                                <Title margintTop="0px" font="18px" color={R.colors.white}>
                                    Prosseguir
                                </Title>
                            </Btn>
                        </>
                    )}
                />
            );
        }
    
        //= =================================================================================================
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor={R.colors.primary} />
                <Header />
    
                {renderModal()}
    
                {renderModalConfirmation()}
    
                {loading && <LoadingScreen title="Salvando..." />}
    
                <ContentMain paddingBottom="40px">
                    <ContainerScroll showsVerticalScrollIndicator={false}>
                        <Container>
                            <Text style={R.styles.title}>{motorista?.NMMOTORI}</Text>
    
                            <Card marginTop="10px">{renderInfo()}</Card>
    
                            {renderModules()}
                        </Container>
    
                        <Container>
                            <Hr />
    
                            {renderSettings()}
    
                            <View style={{ height: 50 }} />
                        </Container>
                    </ContainerScroll>
                </ContentMain>
            </>
        );
    }
    
    export default Profile;
    `,
  ourModeLogic: `import { useEffect, useState, useCallback } from 'react';
    import { useNavigation } from '@react-navigation/core';
    import AsyncStorage from '@react-native-community/async-storage';
    
    import { selectAppCarga } from '@db/sqlite/queries';
    import { getOperation } from '@services/loginService';
    import { trackEvent } from '@helpers/index';
    import { actionSetMainUserData } from '@stores/Actions';
    import { useDispatch, useSelector } from 'react-redux';
    import { useBetween } from 'use-between';
    
    // ----------- Sharabled State -----------
    const useLogicStates = () => {
        const [IDG046, setIDG046] = useState(false);
        const [motorista, setMotorista] = useState({});
        const [showModal, setShowModal] = useState(false);
        const [showConfirmationModal, setShowConfirmationModal] = useState({
            visible: false,
            messageIndex: 0,
        });
        const [showModalVoucher, setShowModalVoucher] = useState(false);
        const [loading, setLoading] = useState(false);
        const [endCarga, setEndCarga] = useState(0);
        const [EndedCarga, setEndedCarga] = useState(false);
        const [OPERATION, setOPERATION] = useState(false);
    
        return {
            IDG046,
            setIDG046,
            motorista,
            setMotorista,
            showModal,
            setShowModal,
            loading,
            setLoading,
            endCarga,
            setEndCarga,
            EndedCarga,
            setEndedCarga,
            OPERATION,
            setOPERATION,
            showModalVoucher,
            setShowModalVoucher,
            showConfirmationModal,
            setShowConfirmationModal,
        };
    };
    
    // ----------- All Shared States -----------
    export const useSharedState = () => useBetween(useLogicStates);
    
    //= =================================================================================================
    export function useInit() {
        const { setIDG046, setMotorista, setOPERATION } = useSharedState();
        const checkCarga = useCheckCarga();
        const data = {};
        const datas = useSelector((state) => state.datas);
        const dispatch = useDispatch();
        const navigation = useNavigation();
    
        useEffect(() => {
            navigation.addListener('focus', () => {
                if (datas.mainUserData && Object.keys(datas.mainUserData).length > 0) {
                    datas?.mainUserData?.IDG046 && setIDG046(datas?.mainUserData?.IDG046);
                    setMotorista(datas?.mainUserData?.motorista);
                    setOPERATION(datas?.mainUserData?.operation || []);
                } else {
                    selectAppCarga().then(async (app) => {
                        if (app[1] != undefined) {
                            data.IDG046 = app[1].IDG046;
                            setIDG046(app[1].IDG046);
                        }
    
                        data.motorista = app[0];
                        setMotorista(app[0]);
    
                        await getOperation(app[0])
                            .then(async (operation) => {
                                trackEvent('GET OPERATION PROFILE', operation?.CDREFERE);
                                data.operation = operation;
                                setOPERATION(operation);
                            })
                            .catch((err) => {
                                trackEvent('GET OPERATION PROFILE - ERROR');
                                console.log(%Erro ao buscar operação. |{err}%);
                            });
    
                        dispatch(actionSetMainUserData(data));
                    });
                }
    
                checkCarga();
            });
        }, []);
    }
    
    //= =================================================================================================
    function useCheckCarga() {
        const { setEndCarga, setEndedCarga } = useSharedState();
    
        return useCallback(() => {
            (async () => {
                const endCarga = await AsyncStorage.getItem('@ST_CARGA');
                const ENDED_CARGA = await AsyncStorage.getItem('@ENDED_CARGA');
    
                setEndCarga(endCarga);
                setEndedCarga(ENDED_CARGA);
            })();
        });
    }
    `,
  hookNameWrongWay: `export function onInit() {

        useEffect(() => {
            ...
        }, [])
    }`,
  hookNameRightWay: `export function useInit() {

        useEffect(() => {
            ...
        }, [])
    }`,
  hookDontUseSetWrongWay: `
  // ---- Setters do useState iniciam com o prefixo set   
  const [name, setName] = useState();

  export function useSetChangeText() {

        useEffect(() => {
            ...
        }, [])
    }`,
  hookDontUseSetRightWay: `
  // ---- Setters do useState já iniciam com o prefixo set   
  const [name, setName] = useState();

  export function useOnChangeText() {

        useEffect(() => {
            ...
        }, [])
    }`,
  hookAsyncWronWay: `
    export function useInit() {

        useEffect(async () => {
            await changeBarColor();
        }, [])
    }`,
  hookAsyncRightWay: `
    export function useInit() {

        useEffect(() => {
            (async () => {
                await changeBarColor();
            })()
        }, [])
    }`,
  hookParamOnInstance: `
    // --- Screen/logic/index.js
    export function useOnChangeText(text) {

        return useCallback(() => {
            (async () => {
                await modifyHeaderText(text);
            })()
        }, []);
    }
    
    // --- Screen/index.js
    import {useOnChangeText} from './logic/index';

    ...

    const onChangeText = useOnChangeText("Test");
    `,
  hookParamOnCalled: `
    // --- Screen/logic/index.js
    export function useOnChangeText() {

        return useCallback((text) => {
            (async () => {
                await modifyHeaderText(text);
            })()
        }, []);
    }
    
    // --- Screen/index.js
    import { useOnChangeText } from './logic/index';
    import { Input } from 'react-native';

    ...

    const onChangeText = useOnChangeText();

    ...

    <Input value={text} onChangeText={(text) => onChangeText(text)}/>

    ...
    `,
};

export { CodeExamplesProjectArchitecture };
