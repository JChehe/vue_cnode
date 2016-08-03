import utils from "./utils"

export default{
	getLastTimeStr(time, friendly){
	    if (friendly) {
	        return utils.MillisecondToDate(new Date() - new Date(time));
	    } else {
	        return utils.fmtDate(new Date(time),'yyyy-MM-dd hh:mm');
	    }
	}
}