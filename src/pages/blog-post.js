import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import PostReaction from '../components/post-reaction'
import Label from '../components/label'
import ArticleCard from '../components/article-card'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './blog-post.module.css'

const BlogPost = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>BlogPost - Notus Pro</title>
        <meta property="og:title" content="BlogPost - Notus Pro" />
      </Helmet>
      <div className={styles['hero']}>
        <div className={styles['fixed-header']}>
          <Header rootClassName="root-class-name"></Header>
        </div>
        <h1 className={` ${styles['text']} ${projectStyles['text2x-l']} `}>
          Miami Beah is looking different at night!
        </h1>
        <div className={styles['bg']}></div>
      </div>
      <div className={styles['post-details']}>
        <div className={styles['container01']}>
          <svg viewBox="0 0 1170.2857142857142 1024" className={styles['icon']}>
            <path d="M585.143 292.571h-219.429v219.429h219.429v-219.429zM658.286 658.286v73.143h-365.714v-73.143h365.714zM658.286 219.429v365.714h-365.714v-365.714h365.714zM1024 658.286v73.143h-292.571v-73.143h292.571zM1024 512v73.143h-292.571v-73.143h292.571zM1024 365.714v73.143h-292.571v-73.143h292.571zM1024 219.429v73.143h-292.571v-73.143h292.571zM146.286 768v-548.571h-73.143v548.571c0 20 16.571 36.571 36.571 36.571s36.571-16.571 36.571-36.571zM1097.143 768v-621.714h-877.714v621.714c0 12.571-2.286 25.143-6.286 36.571h847.429c20 0 36.571-16.571 36.571-36.571zM1170.286 73.143v694.857c0 60.571-49.143 109.714-109.714 109.714h-950.857c-60.571 0-109.714-49.143-109.714-109.714v-621.714h146.286v-73.143h1024z"></path>
          </svg>
        </div>
        <span className={` ${styles['text01']} ${projectStyles['text-x-l']} `}>
          posted 18 Sept 2021
        </span>
        <span className={styles['text02']}>
          <span className={styles['text03']}>
            &apos;Started from the bottom now we here&apos;
          </span>
          <span className={styles['text04']}>
            -
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles['text05']}>Mark Jonson</span>
          <br></br>
        </span>
        <span className={styles['text06']}>
          <span className={styles['text07']}>
            As a result of growing emeraldhouse gas emissions, climate models
            predict that our planet will get significantly warmer, that
            ecosystems will be changed or destroyed, and that enormous human and
            economic costs will be incurred. These scenarios aren’t guaranteed,
            but avoiding them will be very hard. We’re trying to take small
            steps to mitigate our impact.
          </span>
          <br></br>
        </span>
      </div>
      <div className={styles['container02']}>
        <div className={styles['story']}>
          <span
            className={` ${styles['text08']} ${projectStyles['text-l-g']} `}
          >
            <span>March 1, 2019</span>
          </span>
          <h3 className={` ${styles['text10']} ${projectStyles['text2x-l']} `}>
            The Castle Looks Different at Night...
          </h3>
          <img
            alt="image"
            src="/playground_assets/new-york-city-1400w.jpg"
            className={styles['image']}
          />
          <span
            className={` ${styles['text11']} ${projectStyles['text-l-g']} `}
          >
            <span className={styles['text12']}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn&apos;t scroll to get here. Add a button if you
              want the user to see more. We are here to make life better.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span className={styles['text15']}>
              And now I look and look around and there’s so many Kanyes
              I&apos;ve been trying to figure out the bed design for the master
              bedroom at our Hidden Hills compound... and thank you for turning
              my personal jean jacket into a couture piece.
            </span>
            <br></br>
          </span>
          <div className={styles['container03']}>
            <span className={projectStyles['text-l-g']}>
              <span className={styles['text17']}>&quot;</span>
              <span className={styles['text18']}>
                And thank you for turning my personal jean jacket into a couture
                piece.
              </span>
              <span className={styles['text19']}>&quot;</span>
            </span>
            <span className={styles['text20']}>
              <span className={styles['text21']}>Kanye West, Producer.</span>
              <span className={styles['text22']}></span>
            </span>
          </div>
          <h3 className={` ${styles['text23']} ${projectStyles['text2x-l']} `}>
            Using Video Games To Generate Clicks
          </h3>
          <span
            className={` ${styles['text24']} ${projectStyles['text-l-g']} `}
          >
            <span className={styles['text25']}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn&apos;t scroll to get here. Add a button if you
              want the user to see more. We are here to make life better.
            </span>
            <br></br>
          </span>
          <img
            alt="image"
            src="/playground_assets/sofia-kuniakina-1100w.jpg"
            className={styles['image1']}
          />
          <h3 className={` ${styles['text26']} ${projectStyles['text2x-l']} `}>
            Rest of the Story
          </h3>
          <span
            className={` ${styles['text27']} ${projectStyles['text-l-g']} `}
          >
            <span className={styles['text28']}>
              We are here to make life better. And now I look and look around
              and there’s so many Kanyes I&apos;ve been trying to figure out the
              bed design for the master bedroom at our Hidden Hills compound...
              and thank you for turning my personal jean jacket into a couture
              piece. I speak yell scream directly at the old guard on behalf of
              the future. daytime All respect prayers and love to Phife’s family
              Thank you for so much inspiration
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span className={styles['text31']}>
              Thank you Anna for the invite thank you to the whole Vogue team
              And I love you like Kanye loves Kanye Pand Pand Panda I&apos;ve
              been trying to figure out the bed design for the master bedroom at
              our Hidden Hills compound...The Pablo pop up was almost a pop up
              of influence. All respect prayers and love to Phife’s family Thank
              you for so much inspiration daytime I love this new Ferg album!
              The Life of Pablo is now available for purchase I have a dream.
              Thank you to everybody who made The Life of Pablo the number 1
              album in the world! I&apos;m so proud of the nr #1 song in the
              country. Panda! Good music 2016!
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span className={styles['text34']}>
              I love this new Ferg album! The Life of Pablo is now available for
              purchase I have a dream. Thank you to everybody who made The Life
              of Pablo the number 1 album in the world! I&apos;m so proud of the
              nr #1 song in the country. Panda! Good music 2016!
            </span>
            <br></br>
            <br></br>
          </span>
          <div className={styles['post']}>
            <span
              className={` ${styles['text35']} ${projectStyles['text-x-l']} `}
            >
              What people say...
            </span>
            <div className={styles['divider']}></div>
            <div className={styles['container04']}>
              <div className={styles['container05']}>
                <img
                  alt="image"
                  src="/playground_assets/team5-1400w.jpg"
                  className={styles['image2']}
                />
                <div className={styles['container06']}>
                  <span
                    className={` ${styles['text36']} ${projectStyles['text-s-m']} `}
                  >
                    JOHN SNOW
                  </span>
                  <div className={styles['container07']}>
                    <span
                      className={` ${styles['text37']} ${projectStyles['text-x-s']} `}
                    >
                      3 days ago
                    </span>
                  </div>
                </div>
              </div>
              <SecondaryButton button="FOLLOW"></SecondaryButton>
            </div>
            <span
              className={` ${styles['text38']} ${projectStyles['text-m-d']} `}
            >
              <span className={styles['text39']}>
                Personal profiles are the perfect way for you to grab their
                attention and persuade recruiters to continue reading your CV
                because you’re telling them from the off exactly why they should
                hire you.
              </span>
              <br></br>
            </span>
            <img
              alt="image"
              src="/playground_assets/new-york-city-1400w.jpg"
              className={styles['image3']}
            />
            <div className={styles['container08']}>
              <div className={styles['container09']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
                  <path d="M982 426v86q0 16-6 32l-130 300q-20 52-78 52h-384q-34 0-60-26t-26-60v-426q0-34 26-60l280-282 46 46q18 18 18 44v14l-42 196h270q34 0 60 25t26 59zM42 896v-512h172v512h-172z"></path>
                </svg>
                <span
                  className={` ${styles['text40']} ${projectStyles['text-x-s']} `}
                >
                  150
                </span>
                <svg viewBox="0 0 1024 1024" className={styles['icon4']}>
                  <path d="M1024 512c0 202.286-229.143 365.714-512 365.714-28 0-56-1.714-82.857-4.571-74.857 66.286-164 113.143-262.857 138.286-20.571 5.714-42.857 9.714-65.143 12.571-12.571 1.143-24.571-8-27.429-21.714v-0.571c-2.857-14.286 6.857-22.857 15.429-33.143 36-40.571 77.143-74.857 104-170.286-117.714-66.857-193.143-170.286-193.143-286.286 0-201.714 229.143-365.714 512-365.714s512 163.429 512 365.714z"></path>
                </svg>
                <span
                  className={` ${styles['text41']} ${projectStyles['text-x-s']} `}
                >
                  36
                </span>
                <svg viewBox="0 0 1024 1024" className={styles['icon6']}>
                  <path d="M1024 365.714c0 9.714-4 18.857-10.857 25.714l-292.571 292.571c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-146.286h-128c-246.286 0-408 47.429-408 320 0 23.429 1.143 46.857 2.857 70.286 0.571 9.143 2.857 19.429 2.857 28.571 0 10.857-6.857 20-18.286 20-8 0-12-4-16-9.714-8.571-12-14.857-30.286-21.143-43.429-32.571-73.143-72.571-177.714-72.571-257.714 0-64 6.286-129.714 30.286-190.286 79.429-197.143 312.571-230.286 500-230.286h128v-146.286c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l292.571 292.571c6.857 6.857 10.857 16 10.857 25.714z"></path>
                </svg>
                <span
                  className={` ${styles['text42']} ${projectStyles['text-x-s']} `}
                >
                  12
                </span>
              </div>
              <div className={styles['container10']}>
                <img
                  alt="image"
                  src="/playground_assets/team5-1400w.jpg"
                  className={styles['image4']}
                />
                <img
                  alt="image"
                  src="/playground_assets/team6-200h.jpg"
                  className={styles['image5']}
                />
                <img
                  alt="image"
                  src="/playground_assets/team1-200h.jpg"
                  className={styles['image6']}
                />
                <span
                  className={` ${styles['text43']} ${projectStyles['text-x-s']} `}
                >
                  and 30+ more
                </span>
              </div>
            </div>
            <div className={styles['divider1']}></div>
            <span
              className={` ${styles['text44']} ${projectStyles['text-s-m']} `}
            >
              Load previous
            </span>
            <PostReaction
              name="Michael Lewis"
              likes="3"
              image_src="/playground_assets/team1-200h.jpg"
            ></PostReaction>
            <PostReaction
              name="Jessica Stones"
              text="I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down."
              shares="1"
              image_src="/playground_assets/team6-200h.jpg"
            ></PostReaction>
            <span
              className={` ${styles['text45']} ${projectStyles['text-s-m']} `}
            >
              Load next
            </span>
            <div className={styles['container11']}>
              <img
                alt="image"
                src="/playground_assets/team4-200h.png"
                className={styles['image7']}
              />
              <textarea
                rows="1"
                placeholder="Write your comment"
                className={` ${styles['textarea']} ${projectStyles['textarea']} ${projectStyles['text-s-m']} `}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['posts']}>
        <div className={styles['container12']}>
          <Label text="STORIES"></Label>
          <h3 className={` ${styles['text46']} ${projectStyles['healine']} `}>
            <span className={styles['text47']}>Before I go </span>
          </h3>
          <span
            className={` ${styles['text48']} ${projectStyles['text-x-l']} `}
          >
            We&apos;ve got time, but we are only doing what they say and want. I
            do not want to live as I will never die, cause life&apos;s too
            short, and I do not want to drown myself, as others would like.
          </span>
        </div>
        <ArticleCard avatar_src="/playground_assets/team3-200h.jpg"></ArticleCard>
        <ArticleCard
          name="Paul Smith"
          time="Drawn on 23 April"
          title="MateLabs mixes learning with IFTTT"
          image_src="/playground_assets/team5-1400w.jpg"
          avatar_src="/playground_assets/team1-200h.jpg"
        ></ArticleCard>
        <ArticleCard
          name="Jasmine Taylor"
          time="Drawn on 23 April"
          title="US venture investment ticks up in Q2"
          image_src="/playground_assets/team3-200h.jpg"
          avatar_src="/playground_assets/team2-200h.jpg"
        ></ArticleCard>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default BlogPost
