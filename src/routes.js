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
import Code from "./views/Documentation/Code.js";
import Components from "./views/Documentation/Components.js";
import ProjectStructure from "./views/Documentation/ProjectStructure.js";
import Workflow from "./views/Documentation/Workflow.js";

//-------------------------------------------------------------------------
import CreatingProject from "./views/Stack/CreatingProject.js";
import EnvironmentDivision from "./views/Stack/EnvironmentDivision.js";
import CodePush from "./views/Stack/CodePush.js";
import Prettier from "./views/Stack/Prettier.js";
import ESLint from "./views/Stack/ESLint.js";
import Husky from "./views/Stack/Husky.js";
import Analytics from "./views/Stack/Analytics.js";
import Crashlytics from "./views/Stack/Crashlytics.js";
import Commitizen from "./views/Stack/Commitizen.js";
import Pipeline from "./views/Stack/Pipeline.js";

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
      },
    ],
  },
  {
    path: "/help/Componente",
    name: "Help",
    icon: "objects_support-17",
    component: Componente,
    layout: "/admin",
    dropdown: [
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
    ],
  },
  {
    path: "/stack/CreatingProject",
    name: "Stack",
    icon: "objects_spaceship",
    component: CreatingProject,
    layout: "/admin",
    dropdown: [
      {
        path: "/stack/CreatingProject",
        name: "Gerando um projeto",
        component: CreatingProject,
        layout: "/admin",
      },
      {
        path: "/stack/EnvironmentDivision",
        name: "Divis??o de ambientes",
        component: EnvironmentDivision,
        layout: "/admin",
      },
      {
        path: "/stack/CodePush",
        name: "CodePush",
        component: CodePush,
        layout: "/admin",
      },
      {
        path: "/stack/Crashlytics",
        name: "Crashlytics",
        component: Crashlytics,
        layout: "/admin",
      },
      {
        path: "/stack/Analytics",
        name: "Analytics",
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
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "design_app",
  //   component: Dashboard,
  //   layout: "/admin",
  // },
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
    name: "Estrutura????o",
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
    path: "/stack/CreatingProject",
    name: "Gerando um projeto",
    component: CreatingProject,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/stack/EnvironmentDivision",
    name: "Divis??o de ambientes",
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
    path: "/help/Componente",
    name: "Componente",
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
];
export default dashRoutes;
