import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ListingWhereInput = {
  id?: StringFilter;
  loactionData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: JsonFilter;
  photos?: JsonFilter;
  placeAmeneties?: JsonFilter;
  placeSpace?: JsonFilter;
  placeType?: StringFilter;
};
