import { Component, OnInit, Input } from '@angular/core';
import { AigisExpCalcService, ExpTable, Rarity, ExpUnits, ExpUnit } from './aigis-exp-calc.service';

export const range =
  (start: number, end: number) => Array.from({ length: (end - start + 1) }, (v, k) => k + start);

export class Output extends ExpUnit {
  totalExp: number;
}

@Component({
  selector: 'app-aigis-exp-calc',
  templateUrl: './aigis-exp-calc.component.html',
  styleUrls: ['./aigis-exp-calc.component.css']
})
export class AigisExpCalcComponent implements OnInit {
  /** 計算に使用する経験値テーブル */
  public expTable: ExpTable;
  /** 計算に使用する経験値ユニット */
  public expUnits: ExpUnits;
  /** レベル範囲 */
  public levelRange: number[];
  /** レベルボタン設定値 */
  public levelBtnTxt: number[];
  public expUpper: boolean = true;
  public outputs: Output[];

  public rarity: Rarity;
  @Input() nowLevel: number;
  @Input() goalLevel: number;
  @Input() nextlvExp: number;
  @Input() checked: boolean = true;
  public needExp: string = '-';

  constructor(private aigisExpCalcService: AigisExpCalcService) { }

  ngOnInit() {
    this.getExpTable();
    this.getExpUnits();
    this.levelRange = range(1, 99);
  }

  /** 経験値テーブルを取得します */
  getExpTable() {
    this.aigisExpCalcService.getExpTable()
      .subscribe((data: ExpTable) => {
        this.expTable = data,
        this.expTable.rarities = data.rarities.sort((x,y)=>{
          if (y.id < x.id) return -1;
          if (x.id < y.id) return 1;
          return 0;})
        });
  }

  /** 経験値ユニットを取得します */
  getExpUnits() {
    this.aigisExpCalcService.getExpUnits()
      .subscribe((data: ExpUnits) => {
        for (var x in data.armors)
        {
          data.armors[x].quantity = data.armors[x].id==101 ? 99:0;
        };
        for (var x in data.spirits)
        {
          data.spirits[x].quantity = 0;
        };
        this.expUnits = data
      });
  }

  /** 選択中のレアリティを設定します */
  setRarity(rarity: Rarity) {

    this.rarity = rarity;
    this.levelBtnTxt = [
      this.rarity.levelCap.born,
      this.rarity.levelCap.cc,
      this.rarity.levelCap.awaken1,
      this.rarity.levelCap.awaken2
    ];
    // 必要経験値を計算
    this.calcExp();
  }

  setGoal(nowLevel: number, goalLevel: number) {
    this.nowLevel = nowLevel;
    this.goalLevel = goalLevel;
    this.nextlvExp = this.getExpByLevel(nowLevel+1)-this.getExpByLevel(nowLevel);

    // 必要経験値を計算
    this.calcExp();
  }

  setNextlvExpMax(nowLevel: number) {
    this.nextlvExp = this.getExpByLevel(nowLevel+1)-this.getExpByLevel(nowLevel);

    // 必要経験値を計算
    this.calcExp();
  }

  /** レベルから経験値を取得します */
  getExpByLevel(level: number): number {
    if (this.rarity.levelCap.max < level) {
      level = this.rarity.levelCap.max;
    }

    return this.rarity.experiencePoints.find((x) => {
      return x.level == level;
    }).totalExp;
  }

  /** 目標レベルと現在のレベルから必要な経験値を計算します */
  calcExp() {
    // 未選択の場合
    if (this.goalLevel === undefined || this.nowLevel === undefined || this.nextlvExp === undefined) {
      this.needExp = '-';
      return;
    }
    var needExp = this.getExpByLevel(this.goalLevel) - this.getExpByLevel(this.nowLevel+1) + this.nextlvExp;
    this.needExp = needExp + "";

    this.outputs = [];
    var remainder = 0;
    var output: Output = {
      id: 101,
      name: "白鎧",
      quantity: Math.floor(needExp / 8800),
      exp: 8800,
      totalExp: 8800 * Math.floor(needExp / 8800),
      order: 0,
      summary: ""
    };
    this.outputs.push(output)
    var output2: Output = {
      id: 999,
      name: "余り",
      quantity: 1,
      exp: 0,
      totalExp: needExp - output.totalExp,
      order: 0,
      summary: ""
    };
    this.outputs.push(output2)

    while (0 < needExp) {
      needExp = 0;
    }
  }
}
