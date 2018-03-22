<template>
  <div class="cd-timeline-block">
    <div class="cd-timeline-img cd-picture">
    </div>

    <div class="cd-timeline-content">
      <h2>{{experience.company}}</h2>
      <div class="timeline-content-info">
        <span class="timeline-content-info-title">
          <i class="fa fa-certificate" aria-hidden="true"></i>
          <b>{{experience.job}}</b>
        </span>
        <span class="timeline-content-info-date">
          <i class="fa fa-calendar-o" aria-hidden="true"></i>
          {{experience.dates}}
        </span>
      </div>
      <v-container class="white--text">
        <ul>
          <li v-for="detail in experience.description" class="cd-job-role" :key="detail.id">{{detail.text}}</li>
        </ul>
      </v-container>
      <ul class="content-skills">
        <li v-for="tech in experience.technology" :key="tech.id">
          {{tech.techName}}
        </li>
      </ul>
    </div>
    <!-- cd-timeline-content -->
  </div>
  <!-- cd-timeline-block -->
</template>

<script>
  export default {
      props:['experience']
  }

</script>

<style scoped>
  html,
  body {
    background-color: #222c32;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }

  .cd-container {
    width: 90%;
    max-width: 1080px;
    margin: 0 auto;
    background: #FAFAFA;
    padding: 0 10%;
    border-radius: 2px;
  }

  .cd-container::after {
    content: '';
    display: table;
    clear: both;
  }

  /* -------------------------------- 
 Main components 
 -------------------------------- */

  #cd-timeline {
    position: relative;
    padding: 2em 0;
    margin-top: 2em;
    margin-bottom: 2em;
  }

  #cd-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 25px;
    height: 100%;
    width: 4px;
    background: #CFD8DC;
  }

  @media only screen and (min-width: 1170px) {
    #cd-timeline {
      margin-top: 3em;
      margin-bottom: 3em;
    }
    #cd-timeline::before {
      left: 50%;
      margin-left: -2px;
    }
  }

  .cd-timeline-block {
    position: relative;
    margin: 2em 0;
  }

  .cd-timeline-block:after {
    content: "";
    display: table;
    clear: both;
  }

  .cd-timeline-block:first-child {
    margin-top: 0;
  }

  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 1170px) {
    .cd-timeline-block {
      margin: 4em 0;
    }
    .cd-timeline-block:first-child {
      margin-top: 0;
    }
    .cd-timeline-block:last-child {
      margin-bottom: 0;
    }
  }

  .cd-timeline-img {
    position: absolute;
    top: 8px;
    left: 12px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0 0 0 4px #CFD8DC, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
  }

  .cd-timeline-img {
    background: #90A4AE;
  }

  @media only screen and (min-width: 1170px) {
    .cd-timeline-img {
      width: 30px;
      height: 30px;
      left: 50%;
      margin-left: -15px;
      margin-top: 15px;
      /* Force Hardware Acceleration in WebKit */
      -webkit-transform: translateZ(0);
      -webkit-backface-visibility: hidden;
    }
  }

  .cd-timeline-content {
    position: relative;
    margin-left: 60px;
    margin-right: 30px;
    background: #4b6fd1;
    border-radius: 2px;
    padding: 1em;
  }

  .cd-timeline-content .timeline-content-info {
    background: #405fb3;
    padding: 5px 10px;
    color: #ffffff;
    font-size: 12px;
    box-shadow: inset 0 2px 0 rgba(0, 0, 0, 0.08);
    border-radius: 2px;
  }

  .cd-timeline-content .timeline-content-info i {
    margin-right: 5px;
  }

  .cd-timeline-content .timeline-content-info .timeline-content-info-title,
  .cd-timeline-content .timeline-content-info .timeline-content-info-date {
    width: calc(50% - 1px);
    display: inline-block;
  }

  @media (max-width: 500px) {
    .cd-timeline-content .timeline-content-info .timeline-content-info-title,
    .cd-timeline-content .timeline-content-info .timeline-content-info-date {
      display: block;
      width: 100%;
    }
  }

  .cd-timeline-content .content-skills {
    font-size: 12px;
    padding: 0;
    margin-bottom: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .cd-timeline-content .content-skills li {
    background: #405fb3;
    border-radius: 2px;
    display: inline-block;
    padding: 2px 10px;
    color: #ffffff;
    margin: 3px 2px;
    text-align: center;
    font-weight: bold;
    flex-grow: 1;
  }

  .cd-job-role {
    margin-left: 1em;
    padding-left: 0.25em;
    text-align: left;
  }

  .cd-timeline-content:after {
    content: "";
    display: table;
    clear: both;
  }

  .cd-timeline-content h2 {
    color: rgba(255, 255, 255, .9);
    margin-top: 0;
    margin-bottom: 5px;
  }

  .cd-timeline-content p,
  .cd-timeline-content .cd-date {
    color: #ffffff;
    font-size: 13px;
    font-size: 0.8125rem;
  }

  .cd-timeline-content .cd-date {
    display: inline-block;
  }

  .cd-timeline-content p {
    margin: 1em 0;
    line-height: 1.6;
  }

  .cd-timeline-content::before {
    content: '';
    position: absolute;
    top: 16px;
    right: 100%;
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-right: 7px solid #617dcc;
  }

  @media only screen and (min-width: 768px) {
    .cd-timeline-content h2 {
      font-size: 20px;
      font-size: 1.25rem;
    }
    .cd-timeline-content p {
      font-size: 16px;
      font-size: 1rem;
    }
    .cd-timeline-content .cd-read-more,
    .cd-timeline-content .cd-date {
      font-size: 14px;
      font-size: 0.875rem;
    }
  }

  @media only screen and (min-width: 1170px) {
    .cd-timeline-content {
      color: white;
      margin-left: 0;
      padding: 1.6em;
      width: 36%;
      margin: 0 5%;
    }
    .cd-timeline-content::before {
      top: 24px;
      left: 100%;
      border-color: transparent;
      border-left-color: #617dcc;
    }
    .cd-timeline-content .cd-date {
      position: absolute;
      width: 100%;
      left: 122%;
      top: 6px;
      font-size: 16px;
      font-size: 1rem;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content {
      float: right;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
      top: 24px;
      left: auto;
      right: 100%;
      border-color: transparent;
      border-right-color: #617dcc;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
      float: right;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
      left: auto;
      right: 122%;
      text-align: right;
    }
  }

</style>
