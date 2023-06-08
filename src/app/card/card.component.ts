import { Component, OnInit } from '@angular/core';
import liff from '@line/liff';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
    this.main();
  }

  async scanCodeV2(): Promise<void> {
    try {
      const result = await liff.scanCodeV2();

      const resultElement = document.querySelector('#text-result');
      if (resultElement) {
        resultElement.innerHTML = result.value;
      }

      const result1Element = document.querySelector('#result');
      if (result1Element) {
        result1Element.innerHTML = 'ผลลัพธ์การแสกน';
      }

      const buttonElement = document.querySelector('#button');
      if (buttonElement) {
        buttonElement.innerHTML = 'scan again';
      }

      const imageElement = document.getElementById(
        'imageid'
      ) as HTMLImageElement;
      if (imageElement) {
        imageElement.src = '../../assets/green.png';
      }
    } catch (error) {
      alert(error);
    }
  }

  async main(): Promise<void> {
    await liff.init({ liffId: '1661306848-yPVLVojM' });
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  }
}
