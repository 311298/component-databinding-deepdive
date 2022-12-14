import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    blueprintName: string;
    blueprintContent: string;
  }>();

  // newServerName = "";
  // newServerContent = "";

  @ViewChild("serverContentInput", { static: true })
  serverContentInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(input: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: input.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(input: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: input.value,
      blueprintContent: this.serverContentInput.nativeElement.value,
    });
  }
}
