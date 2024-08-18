export * from '../models/BadRequestError';
export * from '../models/ConflictError';
export * from '../models/Credentials';
export * from '../models/DataCenter';
export * from '../models/ForbiddenError';
export * from '../models/GetVmConfigs200Response';
export * from '../models/Location';
export * from '../models/NotFoundError';
export * from '../models/OperatingSystem';
export * from '../models/PageableObject';
export * from '../models/PaginatedResult';
export * from '../models/Provider';
export * from '../models/RefreshToken';
export * from '../models/SecurityGroup';
export * from '../models/SecurityGroupInstanceAdd';
export * from '../models/SecurityGroupRequest';
export * from '../models/SecurityGroupRule';
export * from '../models/SecurityGroupRuleRequest';
export * from '../models/SortObject';
export * from '../models/SpotActionsRequest';
export * from '../models/SpotCreate';
export * from '../models/SpotReboot';
export * from '../models/SshKey';
export * from '../models/SshKeyCreate';
export * from '../models/SshKeyGenerated';
export * from '../models/SshKeyImport';
export * from '../models/SshKeyUpdate';
export * from '../models/SshKeysCreateImport201Response';
export * from '../models/SshKeysCreateImportRequest';
export * from '../models/Subnetwork';
export * from '../models/SubnetworkCreate';
export * from '../models/SubnetworkEdit';
export * from '../models/SubnetworkResources';
export * from '../models/Tag';
export * from '../models/Token';
export * from '../models/UnauthorizedError';
export * from '../models/UnprocessableEntityError';
export * from '../models/Vm';
export * from '../models/VmActionsRequest';
export * from '../models/VmClone';
export * from '../models/VmConfiguration';
export * from '../models/VmConfigurationCost';
export * from '../models/VmCost';
export * from '../models/VmCreate';
export * from '../models/VmDataCenter';
export * from '../models/VmDisksInner';
export * from '../models/VmEditHardware';
export * from '../models/VmLocation';
export * from '../models/VmNetworksInner';
export * from '../models/VmOs';
export * from '../models/VmProvider';
export * from '../models/VmReboot';
export * from '../models/VmSecurityGroup';
export * from '../models/VmShutdown';
export * from '../models/VmStart';
export * from '../models/VmSubnetwork';
export * from '../models/VmTransfer';

import { BadRequestError } from '../models/BadRequestError';
import { ConflictError } from '../models/ConflictError';
import { Credentials } from '../models/Credentials';
import { DataCenter } from '../models/DataCenter';
import { ForbiddenError } from '../models/ForbiddenError';
import { GetVmConfigs200Response } from '../models/GetVmConfigs200Response';
import { Location } from '../models/Location';
import { NotFoundError } from '../models/NotFoundError';
import { OperatingSystem } from '../models/OperatingSystem';
import { PageableObject } from '../models/PageableObject';
import { PaginatedResult } from '../models/PaginatedResult';
import { Provider } from '../models/Provider';
import { RefreshToken } from '../models/RefreshToken';
import { SecurityGroup        , SecurityGroupSynchronizationStatusEnum  , SecurityGroupRecomposingStatusEnum     } from '../models/SecurityGroup';
import { SecurityGroupInstanceAdd } from '../models/SecurityGroupInstanceAdd';
import { SecurityGroupRequest } from '../models/SecurityGroupRequest';
import { SecurityGroupRule } from '../models/SecurityGroupRule';
import { SecurityGroupRuleRequest, SecurityGroupRuleRequestDirectionEnum  , SecurityGroupRuleRequestProtocolEnum     } from '../models/SecurityGroupRuleRequest';
import { SortObject } from '../models/SortObject';
import { SpotActionsRequest, SpotActionsRequestActionEnum   } from '../models/SpotActionsRequest';
import { SpotCreate   , SpotCreateCloudNetworkTypeEnum  , SpotCreateVCpuTypeEnum    , SpotCreateVolumeTypeEnum       } from '../models/SpotCreate';
import { SpotReboot, SpotRebootActionEnum   } from '../models/SpotReboot';
import { SshKey } from '../models/SshKey';
import { SshKeyCreate , SshKeyCreateKeyTypeEnum   } from '../models/SshKeyCreate';
import { SshKeyGenerated } from '../models/SshKeyGenerated';
import { SshKeyImport } from '../models/SshKeyImport';
import { SshKeyUpdate } from '../models/SshKeyUpdate';
import { SshKeysCreateImport201Response } from '../models/SshKeysCreateImport201Response';
import { SshKeysCreateImportRequest , SshKeysCreateImportRequestKeyTypeEnum    } from '../models/SshKeysCreateImportRequest';
import { Subnetwork } from '../models/Subnetwork';
import { SubnetworkCreate } from '../models/SubnetworkCreate';
import { SubnetworkEdit } from '../models/SubnetworkEdit';
import { SubnetworkResources } from '../models/SubnetworkResources';
import { Tag } from '../models/Tag';
import { Token } from '../models/Token';
import { UnauthorizedError } from '../models/UnauthorizedError';
import { UnprocessableEntityError } from '../models/UnprocessableEntityError';
import { Vm         , VmStatusEnum       , VmVCpuTypeEnum  , VmCloudNetworkTypeEnum            } from '../models/Vm';
import { VmActionsRequest, VmActionsRequestActionEnum      , VmActionsRequestVCpuTypeEnum     } from '../models/VmActionsRequest';
import { VmClone, VmCloneActionEnum    } from '../models/VmClone';
import { VmConfiguration } from '../models/VmConfiguration';
import { VmConfigurationCost } from '../models/VmConfigurationCost';
import { VmCost } from '../models/VmCost';
import { VmCreate   , VmCreateCloudNetworkTypeEnum  , VmCreateVCpuTypeEnum    , VmCreateVolumeTypeEnum        } from '../models/VmCreate';
import { VmDataCenter } from '../models/VmDataCenter';
import { VmDisksInner } from '../models/VmDisksInner';
import { VmEditHardware, VmEditHardwareActionEnum   , VmEditHardwareVCpuTypeEnum     } from '../models/VmEditHardware';
import { VmLocation } from '../models/VmLocation';
import { VmNetworksInner } from '../models/VmNetworksInner';
import { VmOs } from '../models/VmOs';
import { VmProvider } from '../models/VmProvider';
import { VmReboot, VmRebootActionEnum   } from '../models/VmReboot';
import { VmSecurityGroup } from '../models/VmSecurityGroup';
import { VmShutdown, VmShutdownActionEnum   } from '../models/VmShutdown';
import { VmStart, VmStartActionEnum   } from '../models/VmStart';
import { VmSubnetwork } from '../models/VmSubnetwork';
import { VmTransfer, VmTransferActionEnum     } from '../models/VmTransfer';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "SecurityGroupSynchronizationStatusEnum",
    "SecurityGroupRecomposingStatusEnum",
    "SecurityGroupRuleRequestDirectionEnum",
    "SecurityGroupRuleRequestProtocolEnum",
    "SpotActionsRequestActionEnum",
    "SpotCreateCloudNetworkTypeEnum",
    "SpotCreateVCpuTypeEnum",
    "SpotCreateVolumeTypeEnum",
    "SpotRebootActionEnum",
    "SshKeyCreateKeyTypeEnum",
    "SshKeysCreateImportRequestKeyTypeEnum",
    "VmStatusEnum",
    "VmVCpuTypeEnum",
    "VmCloudNetworkTypeEnum",
    "VmActionsRequestActionEnum",
    "VmActionsRequestVCpuTypeEnum",
    "VmCloneActionEnum",
    "VmCreateCloudNetworkTypeEnum",
    "VmCreateVCpuTypeEnum",
    "VmCreateVolumeTypeEnum",
    "VmEditHardwareActionEnum",
    "VmEditHardwareVCpuTypeEnum",
    "VmRebootActionEnum",
    "VmShutdownActionEnum",
    "VmStartActionEnum",
    "VmTransferActionEnum",
]);

let typeMap: {[index: string]: any} = {
    "BadRequestError": BadRequestError,
    "ConflictError": ConflictError,
    "Credentials": Credentials,
    "DataCenter": DataCenter,
    "ForbiddenError": ForbiddenError,
    "GetVmConfigs200Response": GetVmConfigs200Response,
    "Location": Location,
    "NotFoundError": NotFoundError,
    "OperatingSystem": OperatingSystem,
    "PageableObject": PageableObject,
    "PaginatedResult": PaginatedResult,
    "Provider": Provider,
    "RefreshToken": RefreshToken,
    "SecurityGroup": SecurityGroup,
    "SecurityGroupInstanceAdd": SecurityGroupInstanceAdd,
    "SecurityGroupRequest": SecurityGroupRequest,
    "SecurityGroupRule": SecurityGroupRule,
    "SecurityGroupRuleRequest": SecurityGroupRuleRequest,
    "SortObject": SortObject,
    "SpotActionsRequest": SpotActionsRequest,
    "SpotCreate": SpotCreate,
    "SpotReboot": SpotReboot,
    "SshKey": SshKey,
    "SshKeyCreate": SshKeyCreate,
    "SshKeyGenerated": SshKeyGenerated,
    "SshKeyImport": SshKeyImport,
    "SshKeyUpdate": SshKeyUpdate,
    "SshKeysCreateImport201Response": SshKeysCreateImport201Response,
    "SshKeysCreateImportRequest": SshKeysCreateImportRequest,
    "Subnetwork": Subnetwork,
    "SubnetworkCreate": SubnetworkCreate,
    "SubnetworkEdit": SubnetworkEdit,
    "SubnetworkResources": SubnetworkResources,
    "Tag": Tag,
    "Token": Token,
    "UnauthorizedError": UnauthorizedError,
    "UnprocessableEntityError": UnprocessableEntityError,
    "Vm": Vm,
    "VmActionsRequest": VmActionsRequest,
    "VmClone": VmClone,
    "VmConfiguration": VmConfiguration,
    "VmConfigurationCost": VmConfigurationCost,
    "VmCost": VmCost,
    "VmCreate": VmCreate,
    "VmDataCenter": VmDataCenter,
    "VmDisksInner": VmDisksInner,
    "VmEditHardware": VmEditHardware,
    "VmLocation": VmLocation,
    "VmNetworksInner": VmNetworksInner,
    "VmOs": VmOs,
    "VmProvider": VmProvider,
    "VmReboot": VmReboot,
    "VmSecurityGroup": VmSecurityGroup,
    "VmShutdown": VmShutdown,
    "VmStart": VmStart,
    "VmSubnetwork": VmSubnetwork,
    "VmTransfer": VmTransfer,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type, subtype] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
