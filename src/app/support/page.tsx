import ResponseForm from "@/components/support/ResponseForm";
import FAQ from "@/components/support/FAQ";

const AboutUs: React.FC = () =>{
    return(
        <main className='flex flex-col items-center mt-10'>
            <section className='w-[80%]'>
                <ResponseForm/>
            </section>
            <section className="w-full flex flex-col items-center mt-10 mb-10">
                <FAQ title='Як створити власний збір?'
                     description='Щоб створити збір вам потрібно авторизуватися, та створити власну банку в моно, після цього на сторінці профілю можна створити власний збір.'/>
                <FAQ title='Який ліміт зборів на користувача?'
                     description='Після того як ви створите 5 зборів, ви не зможете створити новий поки не закриєте якийсь з попередніх'/>
            </section>
        </main>
    );
};

export default AboutUs;
