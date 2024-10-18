import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BreadcrumbService} from "../../../shared/services/breadcrumb/breadcrumb.service";
import {Breadcrumb, Header} from "../../../shared/models/breadcrumb";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {TimelineModule} from "primeng/timeline";
import {IconFieldModule} from "primeng/iconfield";
import {LineDirective} from "../../directives/line/line.directive";
import {MarkerDeliveredDirective} from "../../directives/marker/marker-delivered.directive";

interface EventItem {
    status: boolean;
    location?: string;
    invoice?: string;
    date?: string;
    icon?: string;
    color?: string;
}

@Component({
    selector: 'app-tracking',
    standalone: true,
    imports: [CommonModule, InputTextModule, FloatLabelModule, DropdownModule, CalendarModule, TimelineModule, IconFieldModule, LineDirective, MarkerDeliveredDirective],
    templateUrl: './tracking.component.html',
    styleUrl: './tracking.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class TrackingComponent implements OnInit, AfterViewInit {
    public shipper: any[] = [];
    events: EventItem[][] = [];

    constructor(private breadcrumbService: BreadcrumbService, private renderer: Renderer2, private el: ElementRef) {
    }

    ngOnInit(): void {
        const menuItems: Breadcrumb[] = [
            {icon: 'pi pi-home', route: '/home'},
            {label: 'Location'},
            {label: 'Shipper Tracking'}
        ];
        const header: Header = {
            title: 'Shipper Tracking',
            breadcrumds: menuItems
        };
        this.breadcrumbService.setHeader(header);
        this.shipper = [
            {name: 'Rinaldo Hurles'},
            {name: 'Dru Atwill'},
            {name: 'Heinrik Blasoni'},
            {name: 'Bertie Penniall'},
            {name: 'Byran Fyers'}
        ];

        const events = [
            {status: true, location: 'Leaving the office', date: '2024-10-17 08:45', icon: 'pi pi-building', color:'#0061eb'},
            {status: false, location: 'Grady, Langosh and Mitchell', invoice: 'DL339V6ZN', icon: 'pi-map-marker', color:'#0061eb'},
            {status: true, location: 'Rogahn LLC', invoice: '3TTIFVGE3', date: '2024-10-17 10:25', icon: 'pi pi-map-marker', color:'#0061eb'},
            {status: false, location: 'Bernier, Runte and Kozey', invoice: 'L8VIE2JZP', icon: 'pi pi-building', color:'#0061eb'},
            {status: true, location: 'Skiles Inc', invoice: 'UAYFEBHXJ', date: '2024-10-17 13:00', icon: 'pi-map-marker', color:'#0061eb'},
            {status: false, location: 'Waters, Pouros and Nolan', invoice: 'ADYN3MO47', icon: 'pi-map-marker', color:'#0061eb'},
            {status: false, location: 'Waters, Pouros and Nolan', invoice: 'ADYN3MO47', icon: 'pi-map-marker', color:'#0061eb'},
        ];
        this.events = this.chunkArray(this.sortEvent(events), 4);
    }
    ngAfterViewInit() {
        const timelineEvents = this.el.nativeElement.querySelectorAll('.p-timeline-event');
        timelineEvents.forEach((event: HTMLElement) => {
            this.renderer.setStyle(event, 'flex', '0.5');
        });
    }

    sortEvent(events: EventItem[]): EventItem[] {
        return events.sort((a, b) => {
            if (a.status !== b.status) return a.status ? -1 : 1;
            if (a.date && b.date) return new Date(a.date).getTime() - new Date(b.date).getTime();
            return 0;
        });
    }

    chunkArray(array: EventItem[], chunckSize: number): EventItem[][] {
        const results = [];
        for( let i = 0; i < array.length; i += chunckSize) {
            const chunk = array.slice(i, i + chunckSize);
            results.push(chunk);
        }
        return results;
    }
}
