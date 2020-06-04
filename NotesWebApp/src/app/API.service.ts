/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateNoteInput = {
  id?: string | null;
  username: string;
  name: string;
  note?: string | null;
};

export type ModelNoteConditionInput = {
  username?: ModelStringInput | null;
  name?: ModelStringInput | null;
  note?: ModelStringInput | null;
  and?: Array<ModelNoteConditionInput | null> | null;
  or?: Array<ModelNoteConditionInput | null> | null;
  not?: ModelNoteConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateNoteInput = {
  id: string;
  username?: string | null;
  name?: string | null;
  note?: string | null;
};

export type DeleteNoteInput = {
  id?: string | null;
};

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  name?: ModelStringInput | null;
  note?: ModelStringInput | null;
  and?: Array<ModelNoteFilterInput | null> | null;
  or?: Array<ModelNoteFilterInput | null> | null;
  not?: ModelNoteFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateNoteMutation = {
  __typename: "Note";
  id: string;
  username: string;
  name: string;
  note: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateNoteMutation = {
  __typename: "Note";
  id: string;
  username: string;
  name: string;
  note: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteNoteMutation = {
  __typename: "Note";
  id: string;
  username: string;
  name: string;
  note: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetNoteQuery = {
  __typename: "Note";
  id: string;
  username: string;
  name: string;
  note: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListNotesQuery = {
  __typename: "ModelNoteConnection";
  items: Array<{
    __typename: "Note";
    id: string;
    username: string;
    name: string;
    note: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateNoteSubscription = {
  __typename: "Note";
  id: string;
  username: string;
  name: string;
  note: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateNoteSubscription = {
  __typename: "Note";
  id: string;
  username: string;
  name: string;
  note: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteNoteSubscription = {
  __typename: "Note";
  id: string;
  username: string;
  name: string;
  note: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateNote(
    input: CreateNoteInput,
    condition?: ModelNoteConditionInput
  ): Promise<CreateNoteMutation> {
    const statement = `mutation CreateNote($input: CreateNoteInput!, $condition: ModelNoteConditionInput) {
        createNote(input: $input, condition: $condition) {
          __typename
          id
          username
          name
          note
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateNoteMutation>response.data.createNote;
  }
  async UpdateNote(
    input: UpdateNoteInput,
    condition?: ModelNoteConditionInput
  ): Promise<UpdateNoteMutation> {
    const statement = `mutation UpdateNote($input: UpdateNoteInput!, $condition: ModelNoteConditionInput) {
        updateNote(input: $input, condition: $condition) {
          __typename
          id
          username
          name
          note
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateNoteMutation>response.data.updateNote;
  }
  async DeleteNote(
    input: DeleteNoteInput,
    condition?: ModelNoteConditionInput
  ): Promise<DeleteNoteMutation> {
    const statement = `mutation DeleteNote($input: DeleteNoteInput!, $condition: ModelNoteConditionInput) {
        deleteNote(input: $input, condition: $condition) {
          __typename
          id
          username
          name
          note
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteNoteMutation>response.data.deleteNote;
  }
  async GetNote(id: string): Promise<GetNoteQuery> {
    const statement = `query GetNote($id: ID!) {
        getNote(id: $id) {
          __typename
          id
          username
          name
          note
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetNoteQuery>response.data.getNote;
  }
  async ListNotes(
    filter?: ModelNoteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListNotesQuery> {
    const statement = `query ListNotes($filter: ModelNoteFilterInput, $limit: Int, $nextToken: String) {
        listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            name
            note
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListNotesQuery>response.data.listNotes;
  }
  OnCreateNoteListener: Observable<OnCreateNoteSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateNote {
        onCreateNote {
          __typename
          id
          username
          name
          note
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateNoteSubscription>;

  OnUpdateNoteListener: Observable<OnUpdateNoteSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateNote {
        onUpdateNote {
          __typename
          id
          username
          name
          note
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateNoteSubscription>;

  OnDeleteNoteListener: Observable<OnDeleteNoteSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteNote {
        onDeleteNote {
          __typename
          id
          username
          name
          note
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteNoteSubscription>;
}
