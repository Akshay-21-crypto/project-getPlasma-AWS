import {CognitoUserPool} from 'amazon-cognito-identity-js';
const poolData={
    UserPoolId : "ap-south-1_Bs8vt6GOg",
    ClientId:"5nroug1hba0rma42c6q425018h"
}

export default new CognitoUserPool(poolData);