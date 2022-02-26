import { statService } from '../../ServiceFolder/statService';


export function storeStats() {
    statService.pushStats(
        { id: stats.id, count: count + 1 }
    )
}