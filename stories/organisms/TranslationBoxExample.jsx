import React, { Component } from 'react';
import { TranslationBox } from '@ndla/ui';
import { initArticleTabs } from '@ndla/article-scripts';

class TranslationBoxExample extends Component {
  componentDidMount() {
    initArticleTabs();
  }

  render() {
    return (
      <TranslationBox
        tabs={[
          {
            id: 'zh-s',
            title: 'Kinesisk forenklet',
            content: (
              <section lang="zh-HANS">
                <h1>你好</h1>
                <table>
                  <tbody>
                    <tr>
                      <th scope="row">李美玉丶马红：</th>
                      <td>老师，您好。您贵姓？</td>
                    </tr>
                    <tr>
                      <th scope="row">王老师：</th>
                      <td>你们好！我姓王。你们叫什么名字？</td>
                    </tr>
                    <tr>
                      <th scope="row">李美玉：</th>
                      <td>我姓李，叫李美玉。</td>
                    </tr>
                    <tr>
                      <th scope="row">王老师：</th>
                      <td>你呢？</td>
                    </tr>
                    <tr>
                      <th scope="row">马红：</th>
                      <td>我叫马红。</td>
                    </tr>
                    <tr>
                      <th scope="row">王老师：</th>
                      <td>认识你们很高兴！</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            ),
          },
          {
            id: 'zh-t',
            title: 'Kinesisk tradisjonell',
            content: (
              <section lang="zh-HANT">
                <h1>你好！</h1>
                <table>
                  <tbody>
                    <tr>
                      <th scope="row">李美玉丶馬紅：</th>
                      <td>老師，您好。您貴姓？</td>
                    </tr>
                    <tr>
                      <th scope="row">王老師：</th>
                      <td>你們好！我姓王。你們叫什麼名字？</td>
                    </tr>
                    <tr>
                      <th scope="row">李美玉：</th>
                      <td>我姓李，叫李美玉。</td>
                    </tr>
                    <tr>
                      <th scope="row">王老師：</th>
                      <td>你呢？</td>
                    </tr>
                    <tr>
                      <th scope="row">馬紅：</th>
                      <td>我叫馬紅。</td>
                    </tr>
                    <tr>
                      <th scope="row">王老師：</th>
                      <td>認識你們很高興！</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            ),
          },
        ]}
      />
    );
  }
}

export default TranslationBoxExample;
