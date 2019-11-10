import * as AWS from "aws-sdk";
import * as uuidv1 from "uuid/v1";
import {DocumentClient} from "aws-sdk/lib/dynamodb/document_client";
import PutItemInput = DocumentClient.PutItemInput;
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {BandNameEntry} from "../band.name.entry";

@Injectable()
export class BandNameService {
  client: DocumentClient;

  constructor() {
    AWS.config.region = environment.awsRegion;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: environment.identityPoolId
    });
    this.client = new AWS.DynamoDB.DocumentClient();
  }

  toParams(name: string): PutItemInput {
    return {
      TableName: environment.tableName,
      Item: {
        "id": uuidv1(),
        "name": name
      }
    };
  }

  async putBandName(name: string): Promise<void> {
    await this.client.put(this.toParams(name)).promise();
  }

  async listBandNames(): Promise<BandNameEntry[]> {
    const scanResult = await this.client.scan({TableName: environment.tableName}).promise();
    const dbList = scanResult.Items as BandNameEntry[];
    return dbList
      .filter((entry, index) => index === dbList.indexOf(dbList
        .find(dbListItem => dbListItem.name === entry.name)));
  }
}
