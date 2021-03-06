import { IDictionary } from "../IDictionary";
import { hydra } from "../namespaces";
import { apiDocumentation } from "./apiDocumentation";
import { collection } from "./collection";
import { IPropertyMapping } from "./IPropertyMapping";
import { linksAndOperations } from "./linksAndOperations";
import { linksExtractor } from "./linksExtractor";
import { rdfSchema } from "./rdfSchema";
import { templatedOperationsExtractor } from "./templatedOperationsExtractor";

/**
 * Provides simple property mappings to be used when creating resources.
 * @const
 * @type {IDictionary<IPropertyMapping>}
 */
export const mappings: IDictionary<IPropertyMapping> = {};

rdfSchema(mappings);
apiDocumentation(mappings);
linksAndOperations(mappings);
collection(mappings);
mappings[hydra.required] = {
  default: false,
  propertyName: "required",
  required: true,
  type: [hydra.SupportedProperty as string, hydra.IriTemplateMapping as string]
};
mappings[hydra.subject] = {
  default: subjects => subjects[0] || null,
  propertyName: "subject"
};
mappings[hydra.property] = {
  default: properties => properties[0] || null,
  propertyName: "property"
};
mappings[hydra.object] = {
  default: objects => objects[0] || null,
  propertyName: "object"
};
mappings[hydra.operation] = {
  default: templatedOperationsExtractor,
  propertyName: "operations",
  required: true
};
mappings[hydra.title] = {
  default: "",
  propertyName: "displayName",
  required: true,
  type: [
    hydra.Class as string,
    hydra.ApiDocumentation as string,
    hydra.Link as string,
    hydra.Operation as string,
    hydra.SupportedProperty as string]
};
mappings[hydra.description] = {
  default: "",
  propertyName: "description",
  required: true,
  type: [
    hydra.Class as string,
    hydra.ApiDocumentation as string,
    hydra.Link as string,
    hydra.Operation as string,
    hydra.SupportedProperty as string]
};
mappings.links = {
  default: linksExtractor,
  propertyName: "links",
  required: true
};
