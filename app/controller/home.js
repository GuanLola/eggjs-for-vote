'use strict';

const Controller = require('egg').Controller;

const min = 5,
  max = 10;
let rand = Math.floor(Math.random() * (max - min + 1) + min);

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    setInterval(async () => {
      rand = Math.floor(Math.random() * (max - min + 1) + min);
      console.log('rand', rand);

      const data = await ctx.curl(
        'https://www.toutoupiao.com/Ajax/SaveSendVote',
        {
          method: 'POST',
          dataType: 'json',
          headers: {

            Connection: 'keep-alive',
            Accept: '*/*',
            Origin: 'https://www.toutoupiao.com',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            Referer: 'https://www.toutoupiao.com/Vote/57274',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            Cookie: 'ASP.NET_SessionId=clixqcts2rbfghry2te1sc45; __RequestVerificationToken=lO1oWFqVmvjlCn6LL8qy9wx5SiFVWrFEr-SFVszX0UxHwBLb6lyuQNDLkbe65UuqNawVQGVdqW5nAaG2Yh7MfwuzjI7T_uChrodu118rjtI1; _ga_NVBJ3DQCVF=GS1.1.1662623044.1.0.1662623044.0.0.0; _ga=GA1.2.1571181080.1662623044; _gid=GA1.2.135528099.1662623045; _gat_gtag_UA_45890340_1=1',
          },
          data: {
            voteID: '57274',
            groupID: '0',
            checkedVote: '431930',
            cookieNameSendVote: 'sendVote_57274',
            cookieNameSendVoteTime: 'sendVoteTime_57274',
            __RequestVerificationToken: 'KrVi8miPA1dOY13rp0w9MvWuGEZmd5t5vXOc9LeJlEyLmCS2RCW8SUGvrxaa3oaSR-7FEwCZ_cYVHT-05d27QiKIpM53UYKhrxCcwII5fEY1',
          },
        }
      );
      console.log('data', data.status, data.data.success);
    }, rand * 1000);
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
