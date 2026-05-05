import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  AlertCircle,
  CheckCircle2,
  BookOpen,
  Video,
  FileText,
  ArrowRight
} from 'lucide-react'

interface Strategy {
  id: string
  title: string
  description: string
  riskLevel: 'low' | 'medium' | 'high'
  expectedReturn: string
  timeHorizon: string
  tags: string[]
  steps: string[]
}

const strategies: Strategy[] = [
  {
    id: '1',
    title: '浠峰€兼姇璧勭瓥鐣?,
    description: '瀵绘壘琚綆浼扮殑浼樿川浼佷笟锛岄暱鏈熸寔鏈夛紝鍒嗕韩浼佷笟鎴愰暱绾㈠埄銆傞€傚悎鏈夎€愬績銆佽拷姹傜ǔ鍋ユ敹鐩婄殑鎶曡祫鑰呫€?,
    riskLevel: 'low',
    expectedReturn: '8%-15%/骞?,
    timeHorizon: '3骞翠互涓?,
    tags: ['宸磋彶鐗?, '闀挎湡鎸佹湁', '钃濈鑲?],
    steps: [
      '绛涢€塕OE>15%鐨勪紭璐ㄤ紒涓?,
      '鍒嗘瀽PE銆丳B浼板€兼按骞?,
      '鐮旂┒琛屼笟绔炰簤鏍煎眬',
      '鍒嗘暎鎶曡祫5-10鍙偂绁?,
      '瀹氭湡澶嶇洏锛岄暱鏈熸寔鏈?
    ]
  },
  {
    id: '2',
    title: '瓒嬪娍璺熻釜绛栫暐',
    description: '椤哄簲甯傚満瓒嬪娍锛屼拱娑ㄥ崠璺岋紝鍒╃敤鎶€鏈垎鏋愭妸鎻′拱鍗栨椂鏈恒€傞€傚悎鏈変竴瀹氱粡楠岀殑鎶曡祫鑰呫€?,
    riskLevel: 'medium',
    expectedReturn: '15%-30%/骞?,
    timeHorizon: '1-6涓湀',
    tags: ['鎶€鏈垎鏋?, '鍧囩嚎', 'MACD'],
    steps: [
      '璇嗗埆鑲＄エ涓昏瓒嬪娍',
      '浣跨敤鍧囩嚎鍒ゆ柇涔板崠鐐?,
      '璁剧疆姝㈡崯姝㈢泩浣?,
      '鎺у埗鍗曠瑪浠撲綅',
      '涓ユ牸鎵ц浜ゆ槗绾緥'
    ]
  },
  {
    id: '3',
    title: '鎴愰暱鑲℃姇璧勭瓥鐣?,
    description: '鎶曡祫楂樻垚闀挎€х殑鏂板叴琛屼笟锛岃拷姹傝秴棰濇敹鐩娿€傞€傚悎椋庨櫓鎵垮彈鑳藉姏杈冨己鐨勬姇璧勮€呫€?,
    riskLevel: 'high',
    expectedReturn: '20%-50%/骞?,
    timeHorizon: '1-3骞?,
    tags: ['鏂拌兘婧?, '绉戞妧', '鍒涙柊鑽?],
    steps: [
      '鐮旂┒鏂板叴琛屼笟瓒嬪娍',
      '绛涢€夎惀鏀跺閫?30%鐨勫叕鍙?,
      '鍒嗘瀽鏍稿績绔炰簤浼樺娍',
      '鍏虫敞鐮斿彂鎶曞叆鍗犳瘮',
      '鍔ㄦ€佽皟鏁存寔浠撴瘮渚?
    ]
  }
]

const riskColors = {
  low: 'bg-green-500',
  medium: 'bg-yellow-500',
  high: 'bg-red-500'
}

const riskLabels = {
  low: '浣庨闄?,
  medium: '涓闄?,
  high: '楂橀闄?
}

interface LearningResource {
  title: string
  type: 'article' | 'video' | 'course'
  description: string
  duration: string
}

const resources: LearningResource[] = [
  {
    title: '鑲＄エ鎶曡祫鍏ラ棬鎸囧崡',
    type: 'course',
    description: '浠庨浂寮€濮嬪涔犺偂绁ㄦ姇璧勫熀纭€鐭ヨ瘑',
    duration: '10鑺傝'
  },
  {
    title: '璐㈠姟鎶ヨ〃鍒嗘瀽瀹炴垬',
    type: 'video',
    description: '鎵嬫妸鎵嬫暀浣犺鎳備笂甯傚叕鍙歌储鎶?,
    duration: '2灏忔椂'
  },
  {
    title: '鎶€鏈寚鏍囧畬鍏ㄦ墜鍐?,
    type: 'article',
    description: 'MACD銆並DJ銆丷SI绛夋寚鏍囪瑙?,
    duration: '30鍒嗛挓闃呰'
  }
]

function StrategyCard({ strategy }: { strategy: Strategy }) {
  return (
    <Card className="hover:shadow-xl transition-all h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge className={`${riskColors[strategy.riskLevel]} text-white`}>
            {riskLabels[strategy.riskLevel]}
          </Badge>
          <div className="flex gap-1">
            {strategy.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <CardTitle className="text-xl">{strategy.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-muted-foreground mb-4">{strategy.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-muted rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-1">棰勬湡鏀剁泭</div>
            <div className="font-semibold text-primary">{strategy.expectedReturn}</div>
          </div>
          <div className="bg-muted rounded-lg p-3">
            <div className="text-xs text-muted-foreground mb-1">鎶曡祫鍛ㄦ湡</div>
            <div className="font-semibold">{strategy.timeHorizon}</div>
          </div>
        </div>

        <div className="space-y-2 flex-1">
          <div className="text-sm font-medium mb-2">鎿嶄綔姝ラ:</div>
          {strategy.steps.map((step, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{step}</span>
            </div>
          ))}
        </div>

        <Button className="w-full mt-6" variant="outline">
          浜嗚В璇︽儏
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  )
}

export default function InvestmentStrategy() {
  return (
    <section id="strategy" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">鎶曡祫绛栫暐</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            鏍规嵁鎮ㄧ殑椋庨櫓鍋忓ソ鍜屾姇璧勭洰鏍囷紝閫夋嫨閫傚悎鐨勬姇璧勭瓥鐣ャ€傝浣忥細鎶曡祫鏈夐闄╋紝鍏ュ競闇€璋ㄦ厧銆?          </p>
        </div>

        {/* Risk Assessment */}
        <Card className="mb-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">椋庨櫓璇勪及娴嬭瘯</h3>
                  <p className="text-muted-foreground">3鍒嗛挓浜嗚В鎮ㄧ殑椋庨櫓鎵垮彈鑳藉姏</p>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                寮€濮嬫祴璇?                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Strategy Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {strategies.map(strategy => (
            <StrategyCard key={strategy.id} strategy={strategy} />
          ))}
        </div>

        {/* Learning Resources */}
        <div className="bg-muted/50 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold">瀛︿範璧勬簮</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {resource.type === 'video' && <Video className="w-5 h-5 text-primary" />}
                      {resource.type === 'article' && <FileText className="w-5 h-5 text-primary" />}
                      {resource.type === 'course' && <BookOpen className="w-5 h-5 text-primary" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold mb-1 truncate">{resource.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {resource.type === 'video' && '瑙嗛'}
                          {resource.type === 'article' && '鏂囩珷'}
                          {resource.type === 'course' && '璇剧▼'}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{resource.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-yellow-800">
            <strong>椋庨櫓鎻愮ず锛?/strong>
            鑲＄エ鎶曡祫瀛樺湪椋庨櫓锛岃繃寰€涓氱哗涓嶄唬琛ㄦ湭鏉ヨ〃鐜般€傛湰鏂囧唴瀹逛粎渚涘弬鑰冿紝涓嶆瀯鎴愭姇璧勫缓璁€?            鎶曡祫鑰呭簲鏍规嵁鑷韩鎯呭喌鐙珛鍒ゆ柇锛岃嚜琛屾壙鎷呮姇璧勯闄┿€?          </div>
        </div>
      </div>
    </section>
  )
}

