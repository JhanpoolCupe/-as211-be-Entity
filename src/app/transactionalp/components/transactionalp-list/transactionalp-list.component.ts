import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Transactional } from '@soa/transactionalp/model/transactionalp';
import { TransactionalpService } from '@soa/transactionalp/services/transactionalp.service';
import { TransactionalpFormComponent } from '../transactionalp-form/transactionalp-form.component';

@Component({
  selector: 'app-transactionalp-list',
  templateUrl: './transactionalp-list.component.html',
  styleUrls: ['./transactionalp-list.component.scss']
})
export class TransactionalpListComponent {

  dataSource: Transactional[] = [];

  nuevaTransaccional: Transactional = new Transactional();

  constructor(private _transaccionalService: TransactionalpService,
    public dialog: MatDialog) {
}

ngOnInit(): void {
  this.findAllDataTransaccional();
}

findAllDataTransaccional() {
  this._transaccionalService.listar().subscribe((res) => (this.dataSource = res));
}

navigateToForm() {

}



openDialog(): void {
  const dialogRef = this.dialog.open(TransactionalpFormComponent, {
    width: '35%'
  });

}
}
