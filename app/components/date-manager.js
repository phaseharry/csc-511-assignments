import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DateManagerComponent extends Component {
  @tracked date = new Date();

  get localTime() {
    return this.date;
  }
}
