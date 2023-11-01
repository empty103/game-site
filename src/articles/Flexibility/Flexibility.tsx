import { CustomLink } from '../../components';
import Aside from '../../components/aside/Aside';
import styles from './Flexibility.module.scss';

const Flexibility = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>Brain Training</h1>
                <input type="text" className={styles.search} />
            </header>

            <main className={styles.main}>
                <section className={styles.content}>
                    <h1 className={styles.title}>Cognitive Flexibility</h1>

                    <p className={styles.text}>
                        Cognitive flexibility, or mental flexibility, can be defined as
                        the brain's ability to adapt our behavior and thinking to new,
                        changing, or unexpected situations.
                    </p>

                    <p className={styles.text}>
                        The ability to change or shift in thinking is a crucial component
                        of cognitive flexibility. However, these two concepts need to be
                        distinguished. Cognitive flexibility refers to our capacity to
                        adapt to changes, while mental or cognitive change is the process
                        through which we adapt to those changes.
                    </p>

                    <p className={styles.text}>
                        Cognitive flexibility plays a significant role in learning and the
                        ability to solve complex tasks. It helps us choose the strategy
                        we should follow to adapt to various circumstances that arise
                        on our path. This allows us to gather information from the
                        surrounding environment and respond flexibly, adjusting our
                        behavior according to changes and the demands of the situation.
                    </p>

                    <p className={styles.text}>
                        A person with good Mental or Cognitive Flexibility has the
                        following characteristics:
                    </p>

                    <ol className={styles.characteristic}>
                        <li>
                            Good cognitive or mental flexibility allows us to quickly adapt
                            to changes in the surrounding environment.
                        </li>
                        <li>
                            Cognitive flexibility helps us handle changes that may arise
                            in the process of problem-solving or task execution. It allows
                            us to see alternatives.

                        </li>
                        <li>
                            People with good Cognitive Flexibility easily switch from one
                            type of activity to another and know how to behave correctly in
                            any situation.
                        </li>
                        <li>
                            They can see multiple dimensions of the same reality, assess
                            situations from different perspectives, and establish hidden
                            connections, which enables them to find multiple solutions to a
                            single problem.
                        </li>
                        <li>
                            People with mental flexibility cope better with mistakes and
                            changes in plans. They find it easier to put themselves in another
                            person's shoes and reach mutual agreements.
                        </li>
                    </ol>

                    <p className={styles.text}>
                        Cognitive flexibility is one of the fundamental higher cognitive
                        abilities of metacognition and is part of the processes known
                        as executive functions. Executive functions are crucial for
                        success and development both in education and in life. They
                        allow us to set goals, create and execute plans, control and
                        adjust actions while focusing on results."
                    </p>

                    <hr className={styles.divider} />

                    <h2 className={styles.subtitle}>Development of Mental or Cognitive Flexibility</h2>
                    <p className={styles.text}>
                        Cognitive flexibility, like language or motor skills, is a cognitive
                        ability that goes through stages of development and maturation.
                        The maturation of Cognitive Flexibility is typically completed
                        at around the age of 20. We begin training it from childhood,
                        practicing it daily.

                        Cognitive flexibility depends on the prefrontal cortex of the brain,
                        a brain structure that takes the most time to mature. We often
                        observe how young children want everything at once, and changes
                        to familiar situations often lead to tantrums. This may happen
                        because the child's mental flexibility is still in the process
                        of formation, and they are unable to see different options or
                        alternatives.
                    </p>

                    <hr className={styles.divider} />

                    <h2 className={styles.subtitle}> Examples of Mental or Cognitive Flexibility</h2>

                    <p className={styles.text}>
                        From the moment we wake up until we go to sleep, we use our
                        cognitive flexibility countless times. How is Mental Flexibility
                        presented in our everyday life?
                    </p>

                    <ul className={styles.flexibility__examples}>
                        <li>
                            For example, we are getting ready to have breakfast and suddenly
                            realize that we are out of cereal. What do we do? Do we get upset
                            and go to school or work without breakfast? Or do we have breakfast
                            at a café? Do we prepare breakfast from other ingredients?
                            Cognitive flexibility allows us to mentally consider a range
                            of alternative options in somewhat unexpected situations
                            and choose the most efficient or optimal one.
                        </li>
                        <li>
                            If a close friend suddenly stops communicating with us, mental
                            flexibility helps us understand the reasons. It enables us to
                            understand whether our information is correct, whether this
                            person has a different point of view, and prompts us to put
                            ourselves in their shoes and explain their reluctance to talk.
                            Furthermore, it provides us with the means to find solutions to
                            the problem.
                        </li>
                        <li>
                            Every day, you commute to work using the same route, but what if
                            one day, due to heavy rain, you risk getting stuck in a terrible
                            traffic jam? How will you proceed? You could take the subway,
                            leave home earlier, or choose a different route where such
                            traffic jams are not common. Your usual plans are disrupted
                            by an unexpected situation, but thanks to cognitive flexibility,
                            you can find several alternative options, using the same
                            decision-making abilities: experience, expectations, motivation,
                            knowledge, and emotions.
                        </li>
                        <li>
                            When we ring a doorbell and see that no one is answering, we don't
                            continue ringing, realizing that no one is home. The ability to
                            stop pressing the button and find another solution demonstrates
                            the presence of cognitive flexibility. Furthermore, considering
                            the circumstances, we explore possible solutions to the
                            unexpected problem: we call on the phone, try to find the
                            person in the most likely places, or return later
                        </li>
                    </ul>
                </section>

                <Aside className={styles.aside}></Aside>
            </main>

        </>
    );
}

export default Flexibility;