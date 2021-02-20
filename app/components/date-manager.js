import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DateManagerComponent extends Component {
  @tracked date = new Date();
  @tracked intervalUpdater;

  constructor() {
    super(...arguments);
    this.intervalUpdater = setInterval(() => {
      this.updateTime();
    }, 1);
  }

  @action
  updateTime() {
    this.date = new Date();
  }
}
