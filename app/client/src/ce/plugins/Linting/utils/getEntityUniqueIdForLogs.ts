import type { JSActionEntity } from "ee/entities/DataTree/types";
import { ENTITY_TYPE } from "entities/DataTree/dataTreeFactory";
import type { DataTreeEntity } from "entities/DataTree/dataTreeTypes";

const entityUniqueIdGetterMap: Record<
  string,
  (entity: DataTreeEntity) => string
> = {
  [ENTITY_TYPE.JSACTION]: (entity) => {
    return (entity as JSActionEntity).actionId;
  },
};

export default function getEntityUniqueIdForLogs(entity: DataTreeEntity) {
  const getUniqueId = entityUniqueIdGetterMap[entity.ENTITY_TYPE];

  if (!getUniqueId) return "";

  return getUniqueId(entity);
}
