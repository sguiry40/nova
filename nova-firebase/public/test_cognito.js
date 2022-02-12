// Add 'aws-amplify' library into your application
import {Amplify, Auth} from "aws-amplify";

// Configure Auth category with your Amazon Cognito credentials
Amplify.configure({
Auth: {
identityPoolId: 'us-east-1_Bdmvtbb9k', // Amazon Cognito Identity Pool ID
region: 'us-east-1', // Amazon Cognito Region
}
});

// Call Auth.signIn with user credentials
Auth.signIn(username, password)
.then(user => console.log(user))
.catch(err => console.log(err));