
export const portalReducer =(state,action)=>{
    switch (action.type) {
        case 'addPatient':
            const adding = {name:action.name,id:action.name+(state.patients.length+1)}
            const newPatients = [...state.patients,adding]
            return {...state,patients:newPatients}
            break;
        case 'removePatient':
            const removed = state.patients.filter(patient => patient.id !== action.id);

            return {...state,patients:removed}
            break;
    
        default:
            return state;
            break;
    }
}