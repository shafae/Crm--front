import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-payment-pdf',
  templateUrl: './payment-pdf.component.html',
  styleUrls: ['./payment-pdf.component.css']
})
export class PaymentPdfComponent implements OnInit {
  constructor(private service: GlobalServiceService , private activeRoute:ActivatedRoute){}
  paymentId=this.activeRoute.snapshot.paramMap.get('id')
  pdfSrc=`http://localhost:3000/uploads/pdf/${this.paymentId}.pdf`

  ngOnInit(): void {

  }



}
