import * as AWS from "aws-sdk";
import * as uuidv1 from "uuid/v1";
import {DocumentClient} from "aws-sdk/lib/dynamodb/document_client";
import PutItemInput = DocumentClient.PutItemInput;
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";

@Injectable()
export class BandNameService {
  client: DocumentClient;

  constructor() {
    const devConfig = {region: "us-east-1"};
    const prodConfig = {...devConfig,
      accessKeyId: environment.ACCESS_KEY_ID,
      secretAccessKey: environment.SECRET_ACCESS_KEY};
    const config = environment.production ? prodConfig : devConfig;
    AWS.config.update(config);
    this.client = new AWS.DynamoDB.DocumentClient();
  }

  toParams(name: string): PutItemInput {
    return {
      TableName: "band-names",
      Item: {
        "id": uuidv1(),
        "name": name
      }
    };
  }

  async putBandName(name: string): Promise<void> {
    await this.client.put(this.toParams(name)).promise();
  }
}
