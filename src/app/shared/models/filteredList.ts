import {Filter} from './filter';
import {Owner} from './owner';

export class FilteredList<T> {
  filterUsed: Filter;
  totalCount: number;
  list: T[];
}
