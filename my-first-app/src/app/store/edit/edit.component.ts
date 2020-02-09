import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Output() storeCreated = new EventEmitter<{storeName: string}>();

  constructor() { }

  ngOnInit() {
  }

  addOrUpdateStore(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    this.storeCreated.emit({
      storeName: nameInput.value
    });
  }

}
