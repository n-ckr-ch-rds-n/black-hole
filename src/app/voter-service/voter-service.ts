import * as AWS from "aws-sdk";
import {environment} from "../../environments/environment";
import {DocumentClient} from "aws-sdk/lib/dynamodb/document_client";
import {Voter} from "../voter";

export class VoterService {
  client: DocumentClient;

  user: Voter;

  constructor() {
    AWS.config.region = environment.awsRegion;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: environment.identityPoolId
    });
    this.client = new AWS.DynamoDB.DocumentClient();
  }

  async setUser(code: string) {
    const entry = await this.client.get({TableName: environment.voterTableName, Key: {name: code}}).promise();
    this.user = entry.Item as Voter;
  }

}
