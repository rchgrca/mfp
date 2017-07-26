import model from '../models/index';
import moment from 'moment';

export default Object.assign({}, {
    getGridStyle(){
        return "sm-col sm-col-6";
    },

    getArrowStyle(){
        return "absolute cursor top-0 fa";
    },

    getCellStyle(){
        return "border p1";
    },

    getInputStyle(){
        return "border-box w100 p1 border-none";
    },

    getDate(){
        let { dates } = model,
        aDates = Object.keys(dates),
        date;

        for (let i=0;i<aDates.length;i++){
            if(aDates[i+1]){
                date = moment(aDates[i]).isAfter(aDates[i+1]) ? date : aDates[i+1]
            }
        }

        return date;
    }
})
