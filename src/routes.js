import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";

//-------------------------------------------------------------------------
import EvologMotorista from "./views/Overview/EvologMotorista.js";
import EvologComercial from "./views/Overview/EvologComercial.js";
import EvologChecklist from "./views/Overview/EvologChecklist.js";
import EvologEva from "./views/Overview/EvologEva.js";
import EvologCheckin from "./views/Overview/EvologCheckin.js";
import EvologCanhoto from "./views/Overview/EvologCanhoto.js";
import Evolog4PL from "./views/Overview/Evolog4PL.js";

//-------------------------------------------------------------------------
import CreatingProject from "./views/Help/CreatingProject.js";
import CreatingRepository from "./views/Help/CreatingRepository";
import GeneratingApkAab from "./views/Help/GeneratingApkAab";
import GeneratingKeystore from "./views/Help/GeneratingKeystore";
import Code from "./views/Documentation/Code.js";
import Components from "./views/Documentation/Components.js";
import ProjectStructure from "./views/Documentation/ProjectStructure.js";
import Workflow from "./views/Documentation/Workflow.js";
import DevelopmentMat from "./views/Documentation/DevelopmentMat";
import DefinitionOfDone from "./views/Documentation/DefinitionOfDone";

//-------------------------------------------------------------------------
import Storybook from "./views/Tools/Storybook.js";
import EnvironmentDivision from "./views/Tools/EnvironmentDivision.js";
import CodePush from "./views/Tools/CodePush.js";
import Prettier from "./views/Tools/Prettier.js";
import ESLint from "./views/Tools/ESLint.js";
import Husky from "./views/Tools/Husky.js";
import Analytics from "./views/Tools/Analytics.js";
import Crashlytics from "./views/Tools/Crashlytics.js";
import Commitizen from "./views/Tools/Commitizen.js";
import Pipeline from "./views/Tools/Pipeline.js";
import Fastlane from "./views/Tools/Fastlane.js";

//-------------------------------------------------------------------------
import Windows from "./views/WorkspacePreparation/Windows.js";
import Mac from "./views/WorkspacePreparation/Mac.js";

//-------------------------------------------------------------------------
import NativeModulesAndroid from "./views/Components/NativeModulesAndroid.js";
import NativeModulesIos from "./views/Components/NativeModulesIos.js";

//-------------------------------------------------------------------------
import Navegacao from "./views/Help/Navegacao.js";
import Redux from "./views/Help/Redux.js";
import Componente from "./views/Help/Componente.js";
import Logica from "./views/Help/Logica.js";
import Flatlist from "./views/Help/Flatlist.js";
import Camera from "./views/Help/Camera.js";
import Axios from "./views/Help/Axios.js";
import Hooks from "./views/Help/Hooks.js";
import StateManagement from "./views/Help/StateManagement.js";
import MMKV from "./views/Help/MMKV.js";

var dashRoutes = [
  {
    path: "/overview/EvologMotorista",
    name: "Overview",
    icon: "text_align-left",
    component: EvologMotorista,
    layout: "/admin",
    dropdown: [
      {
        path: "/overview/EvologMotorista",
        name: "Evolog Motorista",
        component: EvologMotorista,
        layout: "/admin",
        dropdownKeepActived: true,
      },
      {
        path: "/overview/EvologComercial",
        name: "Evolog Comercial",
        component: EvologComercial,
        layout: "/admin",
        dropdownKeepActived: true,
      },
      {
        path: "/overview/EvologChecklist",
        name: "Evolog Checklist",
        component: EvologChecklist,
        layout: "/admin",
        dropdownKeepActived: true,
      },
      {
        path: "/overview/EvologEva",
        name: "Evolog Eva",
        component: EvologEva,
        layout: "/admin",
        dropdownKeepActived: true,
      },
      {
        path: "/overview/EvologCheckin",
        name: "Evolog Checkin",
        component: EvologCheckin,
        layout: "/admin",
        dropdownKeepActived: true,
      },
      {
        path: "/overview/EvologCanhoto",
        name: "Evolog Canhoto",
        component: EvologCanhoto,
        layout: "/admin",
        dropdownKeepActived: true,
      },
      // {
      //   path: "/overview/Evolog4PL",
      //   name: "Evolog 4PL",
      //   component: Evolog4PL,
      //   layout: "/admin",
      //   dropdownKeepActived: true,
      // },
    ],
  },
  {
    path: "/workspacePreparation/Windows",
    name: "Workspace Preparation",
    icon: "business_briefcase-24",
    component: Windows,
    layout: "/admin",
    dropdown: [
      {
        path: "/workspacePreparation/Windows",
        name: "Windows OS",
        component: Windows,
        layout: "/admin",
      },
      {
        path: "/workspacePreparation/Mac",
        name: " Mac OS",
        component: Mac,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/documentation/Code",
    name: "Documentation",
    icon: "files_box",
    component: Code,
    layout: "/admin",
    dropdown: [
      {
        path: "/documentation/DevelopmentMat",
        name: "Development Mat",
        component: DevelopmentMat,
        layout: "/admin",
      },
      {
        path: "/documentation/DefinitionOfDone",
        name: "DoD (Definition of Done)",
        component: DefinitionOfDone,
        layout: "/admin",
      },      
      {
        path: "/documentation/Code",
        name: "Code/Rules",
        component: Code,
        layout: "/admin",
      },
      // {
      //   path: "/documentation/Components",
      //   name: "Componentes",
      //   component: Components,
      //   layout: "/admin",
      // },
      {
        path: "/documentation/ProjectStructure",
        name: "Project Structure",
        component: ProjectStructure,
        layout: "/admin",
      },
      {
        path: "/documentation/Workflow",
        name: "Workflow",
        component: Workflow,
        layout: "/admin",
      }
    ],
  },
  {
    icon: "objects_support-17",
    path: "/help/CreatingProject",
    name: "Help",
    component: CreatingProject,
    layout: "/admin",
    dropdown: [
      {
        path: "/help/CreatingProject",
        name: "Generating a project",
        component: CreatingProject,
        layout: "/admin",
      },
      {
        path: "/help/CreatingRepository",
        name: "Creating Repositories",
        component: CreatingRepository,
        layout: "/admin",
      },
      {
        path: "/help/GeneratingApkAab",
        name: "Generating apk/aab",
        component: GeneratingApkAab,
        layout: "/admin",
      },
      {
        path: "/help/GeneratingKeystore",
        name: "Generating Keystore",
        component: GeneratingKeystore,
        layout: "/admin",
      },
      {
        path: "/help/Component",
        name: "Component",
        component: Componente,
        layout: "/admin",
      },
      {
        path: "/help/Logic",
        name: "Logic",
        component: Logica,
        layout: "/admin",
      },
      {
        path: "/help/Redux",
        name: "Redux",
        component: Redux,
        layout: "/admin",
      },
      {
        path: "/help/Navigation",
        name: "Navigation",
        component: Navegacao,
        layout: "/admin",
      },
      {
        path: "/help/Flatlist",
        name: "Flatlist",
        component: Flatlist,
        layout: "/admin",
      },
      {
        path: "/help/Camera",
        name: "Câmera",
        component: Camera,
        layout: "/admin",
      },
      {
        path: "/help/Axios",
        name: "Axios",
        component: Axios,
        layout: "/admin",
      },
      {
        path: "/help/Hooks",
        name: "Hooks",
        component: Hooks,
        layout: "/admin",
      },
      {
        path: "/help/StateManagement",
        name: "React Query | Zustand",
        component: StateManagement,
        layout: "/admin",
      },
      {
        path: "/help/MMKV",
        name: "MMKV",
        component: MMKV,
        layout: "/admin",
      },
    ],
  },
  {
    icon: "objects_spaceship",
    path: "/stack/EnvironmentDivision",
    name: "Tools",
    component: EnvironmentDivision,
    layout: "/admin",
    dropdown: [
      {
        path: "/stack/Storybook",
        name: "Storybook",
        component: Storybook,
        layout: "/admin",
      },
      {
        path: "/stack/EnvironmentDivision",
        name: "Divisão de ambientes",
        component: EnvironmentDivision,
        layout: "/admin",
      },
      {
        path: "/stack/CodePush",
        name: "CodePush (Deprecated)",
        component: CodePush,
        layout: "/admin",
      },
      {
        path: "/stack/Crashlytics",
        name: "Crashlytics (Deprecated)",
        component: Crashlytics,
        layout: "/admin",
      },
      {
        path: "/stack/Analytics",
        name: "Analytics (Deprecated)",
        component: Analytics,
        layout: "/admin",
      },
      {
        path: "/stack/ESLint",
        name: "ESLint",
        component: ESLint,
        layout: "/admin",
      },
      {
        path: "/stack/Prettier",
        name: "Prettier",
        component: Prettier,
        layout: "/admin",
      },
      {
        path: "/stack/Husky",
        name: "Husky",
        component: Husky,
        layout: "/admin",
      },
      {
        path: "/stack/Commitizen",
        name: "Commitizen",
        component: Commitizen,
        layout: "/admin",
      },
      {
        path: "/stack/Pipeline",
        name: "Pipeline",
        component: Pipeline,
        layout: "/admin",
      },
      {
        path: "/stack/Fastlane",
        name: "Fastlane",
        component: Fastlane,
        layout: "/admin",
      },
    ],
  },
  // {
  //   path: "/components/native-modules/",
  //   name: "Componentes",
  //   icon: "objects_diamond",
  //   component: NativeModulesAndroid,
  //   layout: "/admin",
  //   dropdown: [
  //     {
  //       path: "/components/native-modules/android",
  //       name: "Native Modules - Android",
  //       component: NativeModulesAndroid,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/components/native-modules/ios",
  //       name: "Native Modules - Ios",
  //       component: NativeModulesIos,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "ui-1_bell-53",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "users_single-02",
  //   component: UserPage,
  //   layout: "/admin",
  // },
  // {
  //   path: "/extended-tables",
  //   name: "Table List",
  //   icon: "files_paper",
  //   component: TableList,
  //   layout: "/admin",
  // },
  {
    path: "/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/overview/EvologMotorista",
    name: "Evolog Motorista",
    component: EvologMotorista,
    layout: "/admin",
    invisible: true,
    dropdownKeepActived: true,
  },
  {
    path: "/overview/EvologComercial",
    name: "Evolog Comercial",
    component: EvologComercial,
    layout: "/admin",
    invisible: true,
    dropdownKeepActived: true,
  },
  {
    path: "/overview/EvologChecklist",
    name: "Evolog Checklist",
    component: EvologChecklist,
    layout: "/admin",
    invisible: true,
    dropdownKeepActived: true,
  },
  {
    path: "/overview/EvologEva",
    name: "Evolog Eva",
    component: EvologEva,
    layout: "/admin",
    dropdownKeepActived: true,
    invisible: true,
  },
  {
    path: "/overview/EvologCheckin",
    name: "Evolog Checkin",
    component: EvologCheckin,
    layout: "/admin",
    dropdownKeepActived: true,
    invisible: true,
  },
  {
    path: "/overview/EvologCanhoto",
    name: "Evolog Canhoto",
    component: EvologCanhoto,
    layout: "/admin",
    invisible: true,
    dropdownKeepActived: true,
  },
  {
    path: "/overview/Evolog4PL",
    name: "Evolog 4PL",
    component: Evolog4PL,
    layout: "/admin",
    invisible: true,
    dropdownKeepActived: true,
  },
  {
    path: "/documentation/DevelopmentMat",
    name: "Development Mat",
    component: DevelopmentMat,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/documentation/DefinitionOfDone",
    name: "DoD (Definition of Done)",
    component: DefinitionOfDone,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/documentation/Code",
    name: "Code/Rules",
    component: Code,
    layout: "/admin",
    invisible: true,
  },
  // {
  //   path: "/documentation/Components",
  //   name: "Componentes",
  //   component: Components,
  //   layout: "/admin",
  //   invisible: true,
  // },
  {
    path: "/documentation/ProjectStructure",
    name: "Estruturação",
    component: ProjectStructure,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/documentation/Workflow",
    name: "Workflow",
    component: Workflow,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/workspacePreparation/Windows",
    name: "Windows OS",
    component: Windows,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/workspacePreparation/Mac",
    name: " Mac OS",
    component: Mac,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/help/CreatingProject",
    name: "Gerando um projeto",
    component: CreatingProject,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/help/CreatingRepository",
    name: "Creating a repository",
    component: CreatingRepository,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/help/GeneratingApkAab",
    name: "Generating apk/aab",
    component: GeneratingApkAab,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/help/GeneratingKeystore",
    name: "Generating Keystore",
    component: GeneratingKeystore,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/stack/Storybook",
    name: "Storybook",
    component: Storybook,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/stack/EnvironmentDivision",
    name: "Divisão de ambientes",
    component: EnvironmentDivision,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/stack/CodePush",
    name: "CodePush",
    component: CodePush,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/stack/Crashlytics",
    name: "Crashlytics",
    component: Crashlytics,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/stack/Analytics",
    name: "Analytics",
    component: Analytics,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/stack/ESLint",
    name: "ESLint",
    component: ESLint,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/stack/Prettier",
    name: "Prettier",
    component: Prettier,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/stack/Husky",
    name: "Husky",
    component: Husky,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/stack/Commitizen",
    name: "Commitizen",
    component: Commitizen,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/stack/Pipeline",
    name: "Pipeline",
    component: Pipeline,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/stack/Fastlane",
    name: "Fastlane",
    component: Fastlane,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/components/native-modules/android",
    name: "Native Modules - Android",
    component: NativeModulesAndroid,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/components/native-modules/ios",
    name: "Native Modules - Ios",
    component: NativeModulesIos,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/help/Component",
    name: "Component",
    component: Componente,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/help/Logic",
    name: "Logic",
    component: Logica,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/help/Redux",
    name: "Redux",
    component: Redux,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/help/Navigation",
    name: "Navigation",
    component: Navegacao,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/help/Flatlist",
    name: "Flatlist",
    component: Flatlist,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/help/Camera",
    name: "Câmera",
    component: Camera,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/help/Axios",
    name: "Axios",
    component: Axios,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/help/Hooks",
    name: "Hooks",
    component: Hooks,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/help/StateManagement",
    name: "React Query | Zustand",
    component: StateManagement,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/help/MMKV",
    name: "MMKV",
    component: MMKV,
    layout: "/admin",
    invisible: true,
  },
];
export default dashRoutes;
