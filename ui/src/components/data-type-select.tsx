import { Component, linkEvent } from 'inferno';
import { DataType } from '../interfaces';

import { i18n } from '../i18next';

interface DataTypeSelectProps {
  type_: DataType;
  onChange?(val: DataType): any;
}

interface DataTypeSelectState {
  type_: DataType;
}

export class DataTypeSelect extends Component<
  DataTypeSelectProps,
  DataTypeSelectState
> {
  private emptyState: DataTypeSelectState = {
    type_: this.props.type_,
  };

  constructor(props: any, context: any) {
    super(props, context);
    this.state = this.emptyState;
  }

  render() {
    return (
      <div class="btn-group btn-group-toggle">
        <label
          className={`pointer btn btn-sm btn-secondary 
            ${this.state.type_ == DataType.Post && 'active'}
          `}
        >
          <input
            type="radio"
            value={DataType.Post}
            checked={this.state.type_ == DataType.Post}
            onChange={linkEvent(this, this.handleTypeChange)}
          />
          {i18n.t('posts')}
        </label>
        <label
          className={`pointer btn btn-sm btn-secondary ${this.state.type_ ==
            DataType.Comment && 'active'}`}
        >
          <input
            type="radio"
            value={DataType.Comment}
            checked={this.state.type_ == DataType.Comment}
            onChange={linkEvent(this, this.handleTypeChange)}
          />
          {i18n.t('comments')}
        </label>
      </div>
    );
  }

  handleTypeChange(i: DataTypeSelect, event: any) {
    i.state.type_ = Number(event.target.value);
    i.setState(i.state);
    i.props.onChange(i.state.type_);
  }
}
