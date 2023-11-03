import { Component } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-disaply-prd',
  templateUrl: './disaply-prd.component.html',
  styleUrls: ['./disaply-prd.component.css']
})
export class DisaplyPrdComponent {

  Cart: Product[] = [];

  constructor(private cartService: CartService) { 
    this.Cart = this.cartService.getCart();
  }

  data: Product[] = [
    {outofstock: false,new: true,showDetails:false,name:"Mid-Rise Straight Fit Jeans Banglo",description:"It is a very best product for you for a best occasion.",price: 220,type:"Jeans",image:"https://assets.ajio.com/medias/sys_master/root/20221121/8Imz/637b53bef997ddfdbd875582/-473Wx593H-443002832-darkblue-MODEL5.jpg"},
    {outofstock: false,new: false,showDetails:false,name:"Men Regular Fit Shirt with Patch Pocket",description:"It is a very best product for you for a best occasion.",price: 760,type:"Shirts",image:"https://assets.ajio.com/medias/sys_master/root/20231025/Qf41/6538243dafa4cf41f55bb9a9/-473Wx593H-466743676-green-MODEL5.jpg"},
    {outofstock: false,new: false,showDetails:false,name:"Mid-Wash Low-Rise Slim Fit Jeans",description:"It is a very best product for you for a best occasion.",price: 890,type:"Jeans",image:"https://assets.ajio.com/medias/sys_master/root/20230830/n0Jv/64ef6099ddf77915198b54e2/-473Wx593H-442295071-tintblue-MODEL6.jpg"},
    {outofstock: false,new: true,showDetails:false,name:"Embellished Saree with Blouse Piece",description:"It is a very best product for you for a best occasion.",price: 1130,type:"Saree",image:"https://assets.ajio.com/medias/sys_master/root/20230914/yBDG/6502175addf7791519d68cce/-473Wx593H-466574178-orange-MODEL4.jpg"},
    {outofstock: false,new: true,showDetails:false,name:"Floral Print Flared Palazzos with Insert Pockets",description:"It is a very best product for you for a best occasion.",price: 730,type:"Trousers",image:"https://assets.ajio.com/medias/sys_master/root/20231013/yVR9/652872c3ddf779151938a130/-473Wx593H-466702292-yellow-MODEL4.jpg"},
    {outofstock: false,new: false,showDetails:false,name:"Men Regular Fit Shirt with Patch Pocket",description:"It is a very best product for you for a best occasion.",price: 130,type:"Shirts",image:"https://assets.ajio.com/medias/sys_master/root/20231025/m1uh/65382869ddf779151955b123/-473Wx593H-466743676-grey-MODEL5.jpg"},
    {outofstock: true,new: false,showDetails:false,name:"Mid-Wash Low-Rise Slim Tapered Fit Jeans",description:"It is a very best product for you for a best occasion.",price: 320,type:"Jeans",image:"https://assets.ajio.com/medias/sys_master/root/20230508/xOfw/6459116742f9e729d76ef23d/-473Wx593H-441924767-indigo-MODEL5.jpg"},
    {outofstock: false,new: true,showDetails:false,name:"Polka-Dot Print Saree with Contrast Boarder",description:"It is a very best product for you for a best occasion.",price: 80,type:"Saree",image:"https://assets.ajio.com/medias/sys_master/root/20230703/iVee/64a2f7d7a9b42d15c931c378/-1117Wx1400H-466328382-pink-MODEL2.jpg"},
    {outofstock: false,new: false,showDetails:false,name:"Textured Relaxed Fit Trousers for Night",description:"It is a very best product for you for a best occasion.",price: 430,type:"Trousers",image:"https://assets.ajio.com/medias/sys_master/root/20230627/GPq7/649b0da4eebac147fc0d144a/-473Wx593H-465581718-blue-MODEL5.jpg"},
    {outofstock: true,new: false,showDetails:false,name:"Men Regular Fit Shirt with Patch Pocket",description:"It is a very best product for you for a best occasion.",price: 340,type:"Shirts",image:"https://assets.ajio.com/medias/sys_master/root/20231025/wpje/653824bfddf77915195586f7/-473Wx593H-466743676-maroon-MODEL6.jpg"}
  ];

  Original: Product[] = this.data;

  Toggle(name:string):void{
    
    this.data = this.Original.map((ele)=> ele.name===name ? {...ele,showDetails: !ele.showDetails} : ele);
    this.Original = this.Original.map((ele)=> ele.name===name ? {...ele,showDetails: !ele.showDetails} : ele);
  }

  AddCart(name: string): void {
    let SingleEle = this.Original.find((ele) => ele.name === name);
    let check = this.Cart.find((ele)=> ele.name===name);
    if(!check){
      if (SingleEle) {
        this.cartService.addToCart(SingleEle);
      }
    }else{
      alert("Already in Cart")
    }
    this.Cart = this.cartService.getCart();
  }
  
  
  checkAvaCart(name: string): boolean{
    let check = this.Cart.find((ele)=> ele.name===name);
    if(check){
      return true;
    }else{
      return false;
    }
  }
  
}
