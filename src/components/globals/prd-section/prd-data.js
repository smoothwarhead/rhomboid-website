

export const stepFormData = [
    {
        id: 1,
        option: "I'm a patient",
    },
    {
        id: 2,
        option: "I'm considering Rhomboid Bridge for my organization",
    },
    {
        id: 3,
        option: "I'm current Rhomboid Bridge customer",
    },

]

export const stepPatientFormData = [
    {
        id: 1,
        option: "Looking for Patient Resources or FAQs?",
    },
    {
        id: 2,
        option: "Need help finding your patient portal?",
    },
    {
        id: 3,
        option: "Want to pay your bill online?",
    },

]

export const stepCustomerFormData = [
    {
        id: 1,
        option: "Rhomboid Bridge Login",
    },
    {
        id: 2,
        option: "Rhomboid Bridge Customer support",
    },
    {
        id: 3,
        option: "I'm interested in additional Rhomboid Health products",
    },

]


export const stepFormInput1 = [

    {
        
        name: "firstName",
        placeholder: "First Name",
        label: "First Name",
        isPassword: false,
        errorMessage: "Please enter a first name",
        validate: true


        
    },
    {
       
        name: "lastName",
        placeholder: "Last Name",
        label: "Last Name",
        isPassword: false,
        errorMessage: "Please enter a last name",
        validate: true



    },
    {
        
        name: "companyEmail",
        placeholder: "Company Email",
        label: "Company Email",
        isPassword: false,
        validate: true,
        errorMessage: "Please enter a valid email address",
        validate: true


    },
    {
       
        name: "phoneNumber",
        placeholder: "Phone Number",
        label: "Phone Number",
        isPassword: false,
        errorMessage: "The password field cannot be empty.",
        validate: true

    },

];


export const stepFormInput2 = [

    {
        
        name: "organizationName",
        placeholder: "Name of Organization",
        label: "Name of Organization",
        isPassword: false,
        errorMessage: "Please enter a first name",
        validate: true


        
    },
    {
       
        name: "physicians",
        placeholder: "Number of physicians in your organization",
        label: "Number of physicians in your organization",
        isPassword: false,
        errorMessage: "Please enter a last name",
        validate: true



    },
    {
        
        name: "organizationType",
        placeholder: "Type of organization (optional)",
        label: "Type of organization (optional)",
        isPassword: false,
        validate: true,
        errorMessage: "Please enter a valid email address",
        validate: false
        

    },
    {
       
        name: "evaluationTime",
        placeholder: "When will you actively evaluate new solution(s) (optional)",
        label: "When will you actively evaluate new solution(s) (optional)",
        isPassword: false,
        errorMessage: "The password field cannot be empty.",
        validate: false

    },

];
