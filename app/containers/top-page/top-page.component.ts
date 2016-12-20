import { Component } from '@angular/core';
import { Http } from  '@angular/http';

@Component({
  selector: 'top-page',
  template: `
    <div class="page-wrapper flex">
        <div class="sidebar">
            <div class="Panel">
                <div class="StatsCard">
                    <div class="StatsCard-summary">
                        <div class="StatsCard-avatar">
                            <div class="Avatar Avatar--large">
                                <img class="Avatar-image" src="http://fakeimg.pl/300/">
                            </div>
                        </div>
                        <div>
                            <div class="StatsCard-fullname">オロ太郎</div>
                            <div class="StatsCard-username">@orotaro</div>
                        </div>
                    </div>

                    <div class="StatsCard-stats">
                        <div class="StatsCard-stat">
                            <div class="StatsCard-statLabel">つぶやき数</div>
                            <div class="StatsCard-statValue">120</div>
                        </div>
                        <div class="StatsCard-stat">
                            <div class="StatsCard-statLabel">フォロー数</div>
                            <div class="StatsCard-statValue">120</div>
                        </div>
                        <div class="StatsCard-stat">
                            <div class="StatsCard-statLabel">フォロワー数</div>
                            <div class="StatsCard-statValue">120</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="Panel">
                <h3 class="Panel-title Panel-title--bold">いま盛り上がっている人</h3>

                <div class="SummaryCard">
                    <div class="SummaryCard-avatar">
                        <div class="Avatar">
                            <img class="Avatar-image" src="http://fakeimg.pl/300/">
                        </div>
                    </div>
                    
                    <div class="SummaryCard-meta">
                        <div class="SummaryCard-fullname">オロ野球太郎</div>
                        <div class="SummaryCard-username">@oro_89_taro</div>
                        <div class="SummaryCard-actions">
                            <button class="Button Button--primary">フォロー</button>
                        </div>
                    </div>
                </div>

                <div class="Divider"></div>

                <div class="SummaryCard">
                    <div class="SummaryCard-avatar">
                        <div class="Avatar">
                            <img class="Avatar-image" src="http://fakeimg.pl/300/">
                        </div>
                    </div>
                    
                    <div class="SummaryCard-meta">
                        <div class="SummaryCard-fullname">オロ野球太郎</div>
                        <div class="SummaryCard-username">@oro_89_taro</div>
                        <div class="SummaryCard-actions">
                            <button class="Button Button--primary">フォロー</button>
                        </div>
                    </div>
                </div>

                <div class="Divider"></div>

                <div class="SummaryCard">
                    <div class="SummaryCard-avatar">
                        <div class="Avatar">
                            <img class="Avatar-image" src="http://fakeimg.pl/300/">
                        </div>
                    </div>
                    
                    <div class="SummaryCard-meta">
                        <div class="SummaryCard-fullname">オロ野球太郎</div>
                        <div class="SummaryCard-username">@oro_89_taro</div>
                        <div class="SummaryCard-actions">
                            <button class="Button Button--primary">フォロー</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="main">

            <div class="Panel">
                <h2 class="Panel-title Panel-title--jumbo">フォロー</h2>

                <div class="follow-list">
                    <div class="follow-list-item">
                        <div class="SummaryCard">
                            <div class="SummaryCard-avatar">
                                <div class="Avatar">
                                    <img class="Avatar-image" src="http://fakeimg.pl/300/">
                                </div>
                            </div>
                            
                            <div class="SummaryCard-meta">
                                <div class="SummaryCard-fullname">オロ野球太郎</div>
                                <div class="SummaryCard-username">@oro_89_taro</div>
                                <div class="SummaryCard-actions">
                                    <button class="Button Button--primary">フォロー中</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="follow-list-item">
                        <div class="SummaryCard">
                            <div class="SummaryCard-avatar">
                                <div class="Avatar">
                                    <img class="Avatar-image" src="http://fakeimg.pl/300/">
                                </div>
                            </div>
                            
                            <div class="SummaryCard-meta">
                                <div class="SummaryCard-fullname">オロ野球太郎</div>
                                <div class="SummaryCard-username">@oro_89_taro</div>
                                <div class="SummaryCard-actions">
                                    <button class="Button Button--primary">フォロー中</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="follow-list-item">
                        <div class="SummaryCard">
                            <div class="SummaryCard-avatar">
                                <div class="Avatar">
                                    <img class="Avatar-image" src="http://fakeimg.pl/300/">
                                </div>
                            </div>
                            
                            <div class="SummaryCard-meta">
                                <div class="SummaryCard-fullname">オロ野球太郎</div>
                                <div class="SummaryCard-username">@oro_89_taro</div>
                                <div class="SummaryCard-actions">
                                    <button class="Button Button--primaryInvert">解除</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="follow-list-item">
                        <div class="SummaryCard">
                            <div class="SummaryCard-avatar">
                                <div class="Avatar">
                                    <img class="Avatar-image" src="http://fakeimg.pl/300/">
                                </div>
                            </div>
                            
                            <div class="SummaryCard-meta">
                                <div class="SummaryCard-fullname">オロ野球太郎</div>
                                <div class="SummaryCard-username">@oro_89_taro</div>
                                <div class="SummaryCard-actions">
                                    <button class="Button Button--primary">フォロー中</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div class="Panel">
                <div class="TweetPost">
                    <div class="TweetPost-Msg">
                        <input class="TweetPost-textarea" [(ngModel)]="area">
		</div>
                    <div class="TweetPost-footer">
                        <div class="TweetPost-counter">0/140</div>
                        <div class="TweetPost-action">
                            <button class="Button Button--primary" (click)="onClick(area)">送信</button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="Panel">
                <div class="tweet-list">

                    <div class="Tweet" *ngFor="let tweet of tweets">
                        <div class="Tweet-tweeterAvatar">
                            <div class="Avatar Avatar--large">
                                <img class="Avatar-image" src="http://fakeimg.pl/300/">
                            </div>
                        </div>
                        <div class="Tweet-content">
                            <div class="Tweet-tweeterMeta">
                                <div class="Tweet-tweeterFullname">{{tweet.user.name}}</div>
                                <div class="Tweet-tweeterUsername">{{tweet.user.username}}</div>
                            </div>
                            <div class="Tweet-text">
                                <p>{{tweet.text}}</p>
                            </div>
                            <div class="Tweet-footer">
                                <div class="Tweet-actions">
                                    <div class="Tweet-action">
                                        <div class="Icon">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
   width="16px" height="16px" viewBox="0 0 16 16">
                                                <path d="M15,6.545c0-0.276-0.224-0.499-0.501-0.499H9.935L8.502,1.811c-0.137-0.407-0.868-0.407-1.005,0L6.065,6.046H1.501
                                                    C1.224,6.046,1,6.324,1,6.6c0,0.162,0.079,0.315,0.213,0.408l3.676,2.577l-1.442,4.249c-0.043,0.127-0.012,0.273,0.049,0.392
                                                    c0.061,0.12,0.189,0.216,0.317,0.257c0.049,0.016,0.1,0.023,0.15,0.023c0.102,0,0.203-0.031,0.288-0.091L8,11.785l3.75,2.63
                                                    c0.127,0.089,0.331,0.1,0.48,0.055c0.129-0.04,0.235-0.13,0.296-0.25s0.071-0.259,0.028-0.386l-1.442-4.249l3.675-2.577
                                                    C14.921,6.914,15,6.708,15,6.545z"/>
                                            </svg>
                                        </div>
                                        <div>12</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="more">
                    <button class="Button Button--primary">もっと見る</button>
                </div>
            </div>
        </div>
    </div>
`,
  providers: [
  ],
  styles: [require('./top-page.component.scss')]
})
export class TopPageComponent {
  constructor(
 
     private http : Http

  ) {
  }

  private tweets = [];
  
  onClick(area){

    this.http.post('/api/v1/t/create',{
    text: area
    }) 
    .subscribe(area => {
	console.log(area);
    this.http.get('/api/v1/t')
    .subscribe(v => {
        v.json();
        this.tweets=v.json();
        console.log(v.json());

    });
    });
  
  }

  ngOnInit(){
    this.http.get('/api/v1/t')
    .subscribe(v => {
        v.json();
         this.tweets=v.json();
        console.log(v.json());
    });
  }


}
