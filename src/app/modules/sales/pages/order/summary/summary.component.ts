import {Component, OnInit} from '@angular/core';
import {Order} from "../../../../shared/models/order";
import {OrderService} from "../../../../shared/services/sales/order/order.service";
import {Subscription} from "rxjs";
import {CommonModule} from "@angular/common";
import {DragDropModule} from "primeng/dragdrop";
import {TagModule} from "primeng/tag";
import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {AutoCompleteModule} from "primeng/autocomplete";

@Component({
    selector: 'app-order-summary',
    standalone: true,
    imports: [CommonModule, DragDropModule, TagModule, PanelModule, ButtonModule, InputTextModule, FloatLabelModule, DropdownModule, CalendarModule, AutoCompleteModule],
    templateUrl: './summary.component.html',
    styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit {
    private subscriber = new Subscription();
    public newOrder: Order[] = [];
    public processingOrder: Order[] = [];
    public shippedOrder: Order[] = [];
    public status: any[] = [];
    public shipper: any[] = [];

    constructor(
        private orderService: OrderService
    ) {
    }

    ngOnInit(): void {
        this.status = [
            {name: 'Delivered'},
            {name: 'New Order'},
            {name: 'On Delivery'},
        ];
        this.getOrder();
    }

    getOrder() {
        this.orderService.getOrder().then(data => {
            this.shippedOrder = data.filter(value => value.status.statusKey === 'shipped');
            this.processingOrder = data.filter(value => value.status.statusKey === 'processing');
            this.newOrder = data.filter(value => value.status.statusKey === 'new');
        });
    }

    draggedOrder: Order | undefined | null;
    fromOrder: string = ''

    dragStart(order: Order, from: string) {
        this.draggedOrder = order;
        this.fromOrder = from
    }

    dragEnd() {
        this.draggedOrder = null;
    }

    drop(to: string = '') {
        if (this.draggedOrder) {
            let draggedProductIndex = this.findIndex(this.draggedOrder, this.fromOrder);
            // TODO: replace with signal
            if (this.fromOrder == 'new' && to == 'processing') {
                this.newOrder = this.newOrder?.filter((val, i) => i != draggedProductIndex);
                if (!this.processingOrder.includes(this.draggedOrder)) {
                    this.processingOrder = [...(this.processingOrder as Order[]), this.draggedOrder];
                }
            } else if (this.fromOrder == 'processing' && to == 'shipped') {
                this.processingOrder = this.processingOrder?.filter((val, i) => i != draggedProductIndex);
                if (!this.shippedOrder.includes(this.draggedOrder)) {
                    this.shippedOrder = [...(this.shippedOrder as Order[]), this.draggedOrder];
                }
            }
            this.draggedOrder = null;
        }
    }

    findIndex(order: Order, from: string) {
        let _order;
        if (from == 'new') _order = this.newOrder;
        if (from == 'processing') _order = this.processingOrder;
        let index = -1;
        for (let i = 0; i < (_order as Order[]).length; i++) {
            if (order.id === (_order as Order[])[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }
}
