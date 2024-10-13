import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ExportService } from '../../../services/file/export/export.service';
import { Export } from '../../../models/export';
import { Subscription } from 'rxjs';
import { FileService } from '../../../services/file/file.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-export',
  standalone: true,
  imports: [ CommonModule, ButtonModule ],
  templateUrl: './export.component.html',
  styleUrl: './export.component.scss'
})
export class ExportComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  @Input() exportConfig!: Export;

  private subscriber = new Subscription();

  constructor(
    private exportService: ExportService,
    private fileService: FileService
  ) {

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
  }

  export() {
    this.subscriber.add(
      this.exportService.getFile().subscribe((file: string) => {
        const blob = this.fileService.convertBase64ToBlob(file);
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download  = this.exportConfig.file;
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
    )
  }

}
