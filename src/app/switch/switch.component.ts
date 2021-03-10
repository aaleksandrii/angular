
import { Component, forwardRef, Provider } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

const VALUE_ACCESSOR: Provider = {
  multi: true,
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
}

@Component({
  selector: 'app-switch',
  providers: [VALUE_ACCESSOR],
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent implements ControlValueAccessor {
  state = 'off'

  private onChange = (value: any) => {}

  setState(state: string) {
    console.log('setState', state)
    this.state = state;

    this.onChange(this.state)
  }

  registerOnChange(fn: any): void { // принимает ф-ю которая будет следить за изменениями; необходимо зареестрировать метод onChange
    console.log('registerOnChange', fn)
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { // тоже самое что и registerOnChange, только для мобильных устройств
    console.log('registerOnTouched', fn)
  }

  setDisabledState(isDisabled: boolean): void { // для блокировки модели
    console.log('setDisabledState', isDisabled)
  }

  writeValue(state: string): void { // принимает изменнения от ngModel
    console.log('writeValue', state)
    this.state = state;
  }
}
