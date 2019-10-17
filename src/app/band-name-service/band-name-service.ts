import * as AWS from 'aws-sdk';
import * as uuidv1 from 'uuid/v1';
import {DocumentClient} from 'aws-sdk/lib/dynamodb/document_client';
import PutItemInput = DocumentClient.PutItemInput;
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable()
export class BandNameService {
  client: DocumentClient;

  constructor() {
    AWS.config.region = 'us-east-1';
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:54efc993-0bcc-4bda-85fe-79d1126c1566'
    });
    this.client = new AWS.DynamoDB.DocumentClient();
  }

  toParams(name: string): PutItemInput {
    return {
      TableName: 'band-names',
      Item: {
        'id': uuidv1(),
        'name': name
      }
    };
  }

  async putBandName(name: string): Promise<void> {
    await this.client.put(this.toParams(name)).promise();
  }
}
