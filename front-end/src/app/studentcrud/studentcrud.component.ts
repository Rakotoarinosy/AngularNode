import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-studentcrud',
  standalone: true,
  imports: [CommonModule,FormsModule, HttpClientModule],
  templateUrl: './studentcrud.component.html',
  styleUrl: './studentcrud.component.scss'
})
export class StudentcrudComponent implements OnInit{
  studentArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  name: string ="";
  course: string ="";
  fee: string ="";
  currentStudentID = "";

  constructor(private http: HttpClient)
  {
    this.getAllStudent();
  }

  ngOnInit(): void {

  }
  getAllStudent() {
    this.http.get("http://localhost:5000/student")
      .subscribe((resultData: any) =>
      {
        this.isResultLoaded = true;
          // console.log("Tous les students :", resultData.data);
        this.studentArray = resultData.data;
      });
  }


  register()
  {
    let bodyData = {
      "name": this.name,
      "course": this.course,
      "fee": this.fee
    };

    this.http.post("http://localhost:5000/student/addStudent", bodyData).subscribe((resultData: any) =>
    {
      console.log("data",resultData);
      alert("Student Registered Successfully")
      this.getAllStudent();
    });
  }

  setUpdate(data: any)
  {
    this.name = data.name;
    this.course = data.course;
    this.fee = data.fee;

    this.currentStudentID = data.id;
  }

  UpdateRecords()
  {
    let bodyData =
    {
      "name": this.name,
      "course": this.course,
      "fee": parseInt(this.fee)
    };

    this.http.put("http://localhost:5000/student/updateStudent"+"/"+this.currentStudentID,bodyData).subscribe((resultData: any) =>
    {
      // console.log(resultData);
      alert('Student Registered Updated');
      this.getAllStudent()
    });
  }


  save()
  {
    if(this.currentStudentID === '')
    {
      this.register();
    }
    else
    {
      this.UpdateRecords();
    }
  }

  setDelete(data: any)
  {
    this.http.delete("http://localhost:5000/student/deleteStudent"+"/"+data.id).subscribe((resultData: any) =>
    {
      // console.log(resultData);
      alert("Student Deleted")
      this.getAllStudent();
    });
  }

}
