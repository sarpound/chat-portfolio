import { AppModel } from "../interfaces/app.interface";
import { getCurrentTime } from "../shared/utils/date.util";

export const appModel: AppModel = {
  currentMessage: { userId: '', message: '', time: getCurrentTime() },
  isPortraitView: false,
  isChatPanelSelect: false
}
