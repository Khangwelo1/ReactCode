export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_Member':
            return {
                ...state,
                Members: state.Members.filter(Member => Member.id !== action.payload)
            };
        case 'ADD_Members':
            return {
                ...state,
                Members: [...state.Members, action.payload]
            };
        case 'EDIT_Member':
            const updatedMember = action.payload;

            const updatedMembers = state.Members.map(Member => {
                if (Member.id === updatedMember.id) {
                    return updatedMember;
                }
                return Member;
            });

            return {
                ...state,
                Members: updatedMembers
            };
        default: return state;
    }
}