import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  loactionData?: SortOrder;
  locationType?: SortOrder;
  mapData?: SortOrder;
  photos?: SortOrder;
  placeAmeneties?: SortOrder;
  placeSpace?: SortOrder;
  placeType?: SortOrder;
  updatedAt?: SortOrder;
};
