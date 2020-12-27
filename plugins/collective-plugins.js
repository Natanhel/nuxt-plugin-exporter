import Vue from 'vue'
import { mapGetters, mapSetters } from 'components/components/Center/GenericComponents/vuex'
import Highcharts from 'components/components/Center/PratView/PratCards/highcharts'
import xrange from 'components/components/Center/PratView/PratCards/highcharts/modules/xrange'
import MonthPicker from 'components/components/Center/GenericComponents/MonthPicker'
import AttendanceDataJson from 'components/JsonValues/PratCards/AttendanceData.json'
import AttendancePlotBandsJson from 'components/JsonValues/PratCards/AttendancePlotBands.json'
import AttendanceCatagoriesJson from 'components/JsonValues/PratCards/AttendanceCatagories.json'
import EducationsDataJson from 'JsonValues/PratCards/Education.json'
import PratCardGrantTimeline from 'components/components/Center/PratView/PratCards/PratCardsPopups/PratCardGrantTimeline'
import GrantsDataJson from 'JsonValues/PratCards/Grants.json'
import i18n from 'locales/he.json'
import IncentivesDataJson from 'JsonValues/PratCards/Incentives.json'
import PointsDataJson from 'JsonValues/PratCards/Points.json'
import SalaryDataJson from 'JsonValues/PratCards/Salary.json'
import PratCardPopupVacations from 'components/components/Center/PratView/PratCards/PratCardsPopups/PratCardPopupVacations'
import VacationPopupHeaders from 'JsonValues/PratCards/VacationPopupHeaders.json'
import VacationPopupInfo from 'JsonValues/PratCards/VacationPopupInfo.json'
import VacationPopupInfoTitles from 'JsonValues/PratCards/VacationPopupInfoTitles.json'
import PratHeaderBasicDetails from 'components/components/Center/PratView/PratHeader/PratHeaderBasicDetails'
import PratHeaderPersonalDetails from 'components/components/Center/PratView/PratHeader/PratHeaderPersonalDetails'
import PratHeaderImportantDetails from 'components/components/Center/PratView/PratHeader/PratHeaderImportantDetails'
import PratHeaderPhoto from 'components/components/Center/PratView/PratHeader/PratHeaderPhoto'
import PratHeaderImportantDetailsIcon from 'components/components/Center/PratView/PratHeader/PratHeaderImportantDetailsIcon'
import ImportantData from 'JsonValues/PratCards/ImportantData.json'
import PersonalData from 'JsonValues/PratCards/PersonalData.json'
import Indications from 'JsonValues/PratCards/ImportantData.json'
import { chart } from 'components/components/Center/UnitView/UnitPanels/highcharts'
import MaximizeRightsData from 'JsonValues/UnitData/MaximizeRightsData.json'
import testing6 from 'components/top/testing6'
import testing1 from 'components/main/testing1'
Vue.use(mapGetters)
Vue.use(mapSetters)
Vue.use(Highcharts)
Vue.use(xrange)
Vue.use(MonthPicker)
Vue.use(AttendanceDataJson)
Vue.use(AttendancePlotBandsJson)
Vue.use(AttendanceCatagoriesJson)
Vue.use(EducationsDataJson)
Vue.use(PratCardGrantTimeline)
Vue.use(GrantsDataJson)
Vue.use(i18n)
Vue.use(IncentivesDataJson)
Vue.use(PointsDataJson)
Vue.use(SalaryDataJson)
Vue.use(PratCardPopupVacations)
Vue.use(VacationPopupHeaders)
Vue.use(VacationPopupInfo)
Vue.use(VacationPopupInfoTitles)
Vue.use(PratHeaderBasicDetails)
Vue.use(PratHeaderPersonalDetails)
Vue.use(PratHeaderImportantDetails)
Vue.use(PratHeaderPhoto)
Vue.use(PratHeaderImportantDetailsIcon)
Vue.use(ImportantData)
Vue.use(PersonalData)
Vue.use(Indications)
Vue.use(chart)
Vue.use(MaximizeRightsData)
Vue.use(testing6)
Vue.use(testing1)
