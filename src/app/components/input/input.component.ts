import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'hive-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss']
})
export class InputComponent {
  @Input() label: string;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() model: any;
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.type = 'text';
    this.label = '';
    this.placeholder = '';
  }

  handleOnChange($event: any) {
    if (this.onChange !== undefined) {
      this.onChange.emit($event);
    }
  }

  handleOnClick($event: MouseEvent) {
    if (this.onClick !== undefined) {
      this.onClick.emit($event);
    }
  }
}
