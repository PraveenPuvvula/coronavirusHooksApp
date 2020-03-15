import useStatistics from "../utils/useStatistics";
import Statistics from "../src/components/statistics";
import Country from "../src/components/countries";

export default function IndexPage() {
    return (
    <div>
        <Statistics url="https://covid19.mathdro.id/api"></Statistics>
        <Country></Country>
    </div>
    )
}