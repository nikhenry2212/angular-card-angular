import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';



@Component({
  selector: 'app-rick',
  templateUrl: './rick.component.html',
  styleUrls: ['./rick.component.css']
})
export class RickComponent implements OnInit {
  lista:any = []
  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getList()
  }

  getList(){
    this.listService.getList().subscribe(data => {
      this.lista = data.results;
      console.log(this.lista);
    })
  }

}



