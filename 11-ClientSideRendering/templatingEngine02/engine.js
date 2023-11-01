

export function fillTemplate(templateAsString,data){

    const pattern = /{{(.+?)}}/g;

    function fill(sectionData){
        return templateAsString.replace(pattern,(_x,prop)=>sectionData[prop]);
    }

    const res = data.map(fill).join('');
    return res;
    
};

