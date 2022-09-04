import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit {
  @Input() datafromparent!: string;

  childdata!: string;

  @Output() outputtingdata = new EventEmitter<string>();

  functionforsending(): void {
    this.outputtingdata.emit(this.childdata);
  }

  constructor() {}

  ngOnInit(): void {}
}
