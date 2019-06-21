<template>
	<div class="el-date-editor el-input el-input--prefix el-date-editor--dates">
		<el-popover placement="top-start" width="200" trigger="hover" 
			:disabled="formatterCurrent.length == 0" :visible-arrow="false">
			<div v-for="(cval, index) in current" :key="index">
				{{ cval }}<br/>
			</div>
			<input type="text" readonly="readonly" autocomplete="off" name=""
				@focus="inputFocus" v-model="formatterCurrent" slot="reference"
				:style="{height: '30px', lineHeight: '30px'}" class="el-input__inner"/>
			<span class="el-input__prefix" slot="reference">
				<i class="el-input__icon el-icon-date"></i>
			</span>
  		</el-popover>
		<div class="el-picker-panel el-date-picker el-popper" x-placement="bottom-end"
			v-if="isOpen"
			:style="{position: 'absolute', left: 0}">
			<div class="el-picker-panel__body-wrapper">
				<div class="el-picker-panel__body">
					<div class="el-date-picker__header">
						<button type="button" aria-label="前一年" @click="prevYear"
							class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left"></button>
						<button type="button" aria-label="上一月" @click="prevMonth"
							class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-arrow-left"></button>
						<span role="button" class="el-date-picker__header-label">{{ startYear }}年</span>
						<span role="button" class="el-date-picker__header-label">{{ startMonth }}月</span>
						<button type="button" aria-label="后一年" @click="nextYear"
							class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right"></button>
						<button type="button" aria-label="下一月" @click="nextMonth"
							class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-arrow-right"></button>
					</div>
					<div class="el-picker-panel__content">
						<table cellspacing="0" cellpadding="0" class="el-date-table is-week-mode">
							<tr>
								<th>一</th>
								<th>二</th>
								<th>三</th>
								<th>四</th>
								<th>五</th>
								<th>六</th>
								<th>日</th>
							</tr>
							<tr :class="['el-date-table__row', isActive(odate) ? 'current' : '']" 
								v-for="(odate, index) in dates" :key="index" @click="handlerWeek(odate)">
								<td :class="[d.type != 'init' ? d.type + '-month' : '', isCircle(odate, i)]" 
									v-for="(d, i) in odate" :key="i">
									<div>
										<span>{{ d.text }}</span>
									</div>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
			<div class="el-picker-panel__footer">
				<button type="button" @click="closePanel"
					class="el-button el-picker-panel__link-btn el-button--default el-button--mini is-plain">
					<span>关闭</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: [],
		data(){
			return {
				isOpen: false,
				dates: [],
				startYear: '',
				startMonth: '',
				current: []
			}
		},
		methods: {
			handlerWeek(week){
				var weekVal = this.formatterWeek(week);
				if(this.current.indexOf(weekVal) == -1){
					this.current.push(weekVal);
				} else {
					this.current = this.current.filter(item => {
						return item != weekVal;
					});
				}
			},
			isActive(week){
				var weekVal = this.formatterWeek(week);
				return this.current.filter(item => {
					return item == weekVal;
				}).length > 0;
			},
			isCircle(week, i){
				if(this.isActive(week)){
					if(i == 0){
						return 'in-range start-date';
					} else if(i == 6) {
						return 'in-range end-date';
					}
					return '';
				}
				return '';
			},
			inputFocus(){
				this.isOpen = true;
				this.startYear = new Date().getFullYear();
				this.startMonth = new Date().getMonth() + 1;
				this.initCalendar();
			},
			initCalendar(){
				var startDate = this.startYear + '-' + this.startMonth + '-1',
					startDay = new Date(startDate).getDay();
				if(startDay == 0){
					startDay = 7;
				}
				var	endDate = this.nextFirstDate().getDate(),
					prevDate = this.prevLastDate().getDate(),
					calendar = this.calendar(1, endDate),
					excessPrev = this.calendar(prevDate - startDay + 2, prevDate, 'prev'),
					excessNext = this.calendar(1, 7 - this.nextFirstDate().getDay(), 'next'),
					totalCalendar = excessPrev.concat(calendar).concat(excessNext);
				this.dates = this.initDates(totalCalendar);
				this.poLishDates(excessNext[excessNext.length - 1].text + 1);
			},
			poLishDates(i){
				if(this.dates.length < 6) {
					this.dates.push(this.calendar(i, i + 6, 'next'));
					this.poLishDates(i + 8);
				}
			},
			initDates(calendar){
				var c = [];
				if(calendar.length > 0){
					for (var i = 0, len = calendar.length; i < len; i += 7) {
						c.push(calendar.slice(i, i + 7));
					}
				}
				return c;
			},
			calendar(start, end, type){
				var c = [];
				for (var i = start; i <= end; i++) {
					c.push({
						type: typeof type == 'undefined' ? 'init' : type,
						text: i
					});
				}
				return c;
			},
			prevLastDate(){
				return new Date(new Date(this.startYear, this.startMonth, 1) - 1000 * 60 * 60 * 24);
			},
			nextFirstDate(){
				var nextYear = this.startYear,
					nextMonth = this.startMonth + 1;
				if(nextMonth > 12){
					nextYear++;
					nextMonth = 1;
				}
				var startDate = new Date(nextYear, nextMonth - 1, 1);
				return new Date(startDate - 1000 * 60 * 60 * 24);
			},
			formatterWeek(week){
				var first = week[0],
					last = week[week.length - 1];
				var year = this.startYear, month = this.startMonth;
				if(first.type == 'prev'){
					month -= 1;
					if(month < 1){
						month = 12;
						year -= 1;
					}
					
				}
				if(first.type == 'next'){
					month += 1;
					if(month > 12){
						month = 1;
						year += 1;
					}
					
				}
				var start = this.startYear, end = this.startMonth;
				if(last.type == 'next'){
					end += 1;
					if(end > 12){
						end = 1;
						start += 1;
					}
				}
				return year + '-' + month + '-' + first.text + '~' + start + '-' + end + '-' + last.text;
			},
			prevYear(){
				this.startYear--;
				if(this.startYear < 1970){
					this.startYear = 1970;
				}
			},
			prevMonth(){
				this.startMonth--;
				if(this.startMonth < 1){
					this.startMonth = 12;
					this.startYear--;
				}
			},
			nextYear(){
				this.startYear++;
			},
			nextMonth(){
				this.startMonth++;
				if(this.startMonth > 12){
					this.startMonth = 1;
					this.startYear++;
				}
			},
			closePanel(){
				this.isOpen = false;
			}
		},
		mounted(){
			this.$nextTick(() => {
				
			});
		},
		watch: {
			startYear: {
				handler(val, oldVal){
					this.initCalendar();
				},
				deep: true
			},
			startMonth: {
				handler(val, oldVal){
					this.initCalendar();
				},
				deep: true
			}
		},
		computed: {
			formatterCurrent(){
				this.current.sort((a, b) => {
					return new Date(a.split('~')[0]) - new Date(b.split('~')[0]);
				});
				return this.current.join(',');
			}
		}
	}
</script>

<style type="text/css">
	.el-date-table td div{padding: 0;}
	.el-date-table td span{width: 30px; height: 30px; line-height: 30px; border-radius: 0;}
	.el-date-table td.end-date span, .el-date-table td.start-date span{background-color: #4bb9b9;}
	.el-date-table td.start-date div, .el-date-table td.end-date div, 
	.el-date-table.is-week-mode .el-date-table__row:hover td:first-child div,
	.el-date-table.is-week-mode .el-date-table__row:hover td:last-child div{border-radius: 0;}
	.el-date-table td.in-range div, .el-date-table td.in-range div:hover, 
	.el-date-table.is-week-mode .el-date-table__row.current div, 
	.el-date-table.is-week-mode .el-date-table__row:hover div{background-color: rgba(195, 240, 240, 0.5);}
</style>