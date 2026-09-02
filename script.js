// ==================== 多语言 ====================
const i18n = {
  zh: {
    logo:'首页',hero_title:'虚拟地址生成器',hero_sub:'免费在线生成真实格式的随机地址，支持美国、加拿大、英国、澳大利亚、德国、法国等6个国家',
    badge_free:'✅ 免费可用',badge_noreg:'⚡ 无需注册',select_country:'选择国家',select_region:'选择地区',
    result_title:'生成结果',refresh:'🔄 重新生成',copy_all:'📋 复制全部',save:'💾 保存',
    gen_btn:'🎯 生成地址',empty_hint:'选择国家和地区，点击"生成地址"开始',
    why_title:'为什么使用这个虚拟地址生成器？',
    f1_t:'多国地址生成',f1_d:'支持6个国家地址格式，包括美国、加拿大、英国、澳大利亚、德国、法国',
    f2_t:'自定义筛选',f2_d:'按国家和州/省筛选生成地址，满足特定地理位置需求',
    f3_t:'一键复制',f3_d:'每个字段独立复制，快速复制到剪贴板，提高工作效率',
    f4_t:'一键保存',f4_d:'支持保存地址到本地，方便随时查看',
    f5_t:'批量导出',f5_d:'支持一键导出CSV，方便集成到各种系统',
    f6_t:'格式规范',f6_d:'所有生成的地址符合各国地址格式标准，确保实用性',
    blog_title:'最新文章',blog_desc:'了解虚拟地址生成器的使用技巧和最新功能更新',blog_all:'查看所有文章 →',
    blog1_title:'美国地址格式完全指南',blog1_desc:'全面解析美国地址的标准格式，包括街道命名规则、州缩写对照表、ZIP Code编码规则...',
    blog2_title:'如何注册美国区 Apple ID',blog2_desc:'手把手教你注册美国区Apple ID，包含美国地址填写技巧、免税州选择、支付方式设置...',
    blog3_title:'跨境电商地址格式对比',blog3_desc:'全面对比6个主要跨境电商目标国的地址格式差异，帮助卖家避免发货地址错误...',
    faq_title:'常见问题',
    faq1_q:'生成的地址是真实可收件地址吗？',faq1_a:'本工具生成的是地址格式和测试数据参考，主要用于表单填写、开发测试和数据填充，不保证每条地址都对应真实可收件地点。如果需要收信、收快递或转运服务，应使用服务商提供的正式收件信息。',
    faq2_q:'为什么填写地址时会提示邮编、城市或地区不匹配？',faq2_a:'很多网站会校验City、State和ZIP Code是否属于同一地区。如果城市、地区缩写或邮编混用，表单就可能提示不匹配。使用生成结果时，建议把城市、地区和邮编作为一组一起复制。如果仍然提示不匹配，请重新生成一个地址。',
    faq3_q:'这个虚拟地址生成器适合用于哪些测试场景？',faq3_a:'它适合用于网站表单测试、结账流程测试、UI原型展示、数据库填充、自动化测试和跨境电商地址格式校验等场景。真实账号、支付和收件用途应遵守对应平台或服务的规则。',
    cta_title:'准备好开始生成地址了吗？',cta_sub:'无需注册，免费使用我们的虚拟地址生成器，满足您的所有开发和测试需求',cta_btn:'立即开始',
    footer:'© 2026 虚拟地址生成器 | 所有数据均为随机生成，仅供测试使用 | 不代表真实可收件地址',
    copied:'已复制！',saved:'已保存到本地！',no_data:'请先生成地址',
    saved_title:'已保存地址',saved_empty:'暂无保存的地址，生成地址后点击 💾 保存',saved_count:'已保存 {n} 条地址',
    saved_clear:'清空全部',saved_export:'导出 CSV',saved_del:'删除',saved_confirm:'确定要清空所有已保存的地址吗？',saved_time:'保存时间',
    field_first:'名 / First Name',field_last:'姓 / Last Name',field_gender:'性别 / Gender',
    field_phone:'电话 / Phone',field_email:'电子邮件 / Email',field_street:'街道地址 / Street Address',
    field_city:'城市 / City',field_state:'州/省 / State',field_zip:'邮编 / ZIP Code',
    field_full:'完整地址 / Full Address',random:'随机',
    batch_title:'📦 批量生成',batch_hint:'一次生成多条地址，按 JSON / CSV / TSV / Excel / Markdown / 纯文本复制或下载',batch_count:'数量',batch_format:'格式',batch_unit:'条',batch_go:'⚡ 批量生成',batch_copy:'📋 复制',batch_download:'⬇ 下载',batch_fields:'字段',
    country_us:'🇺🇸 美国',country_ca:'🇨🇦 加拿大',country_gb:'🇬🇧 英国',
    country_au:'🇦🇺 澳大利亚',country_de:'🇩🇪 德国',country_fr:'🇫🇷 法国',
    region_all:'随机 (所有地区)'
  },
  en: {
    logo:'Home',hero_title:'Virtual Address Generator',hero_sub:'Free online tool to generate random addresses in real format. Supports US, Canada, UK, Australia, Germany, and France.',
    badge_free:'✅ Free to Use',badge_noreg:'⚡ No Registration',select_country:'Select Country',select_region:'Select Region',
    result_title:'Generated Result',refresh:'🔄 Regenerate',copy_all:'📋 Copy All',save:'💾 Save',
    gen_btn:'🎯 Generate Address',empty_hint:'Select a country and region, then click "Generate"',
    why_title:'Why Use This Virtual Address Generator?',
    f1_t:'Multi-Country',f1_d:'Supports 6 country address formats: US, Canada, UK, Australia, Germany, France',
    f2_t:'Custom Filtering',f2_d:'Filter by country and state/province to meet specific needs',
    f3_t:'One-Click Copy',f3_d:'Copy each field individually or all at once for efficiency',
    f4_t:'One-Click Save',f4_d:'Save addresses locally for easy access anytime',
    f5_t:'Batch Export',f5_d:'Export to CSV with one click for easy integration',
    f6_t:'Format Standards',f6_d:'All addresses comply with respective country format standards',
    blog_title:'Latest Articles',blog_desc:'Tips and latest updates about the virtual address generator',blog_all:'View All Articles →',
    blog1_title:'Complete Guide to US Address Format',blog1_desc:'Comprehensive guide to US address standards, including street naming rules, state abbreviations, ZIP Code encoding...',
    blog2_title:'How to Register a US Apple ID',blog2_desc:'Step-by-step tutorial to create a US Apple ID, including address filling tips, tax-free state selection, payment setup...',
    blog3_title:'Cross-Border Ecommerce Address Comparison',blog3_desc:'Compare address formats across 6 major ecommerce markets to help sellers avoid shipping address errors...',
    faq_title:'Frequently Asked Questions',
    faq1_q:'Are the generated addresses real mailing addresses?',faq1_a:'This tool generates address format and test data references, primarily for form filling, development testing, and data population. It does not guarantee each address corresponds to a real deliverable location.',
    faq2_q:'Why does it show ZIP Code, city, or region mismatch?',faq2_a:'Many websites validate whether City, State/Province and ZIP Code belong to the same area. We recommend copying city, region and postcode as a group. If it still shows mismatch, generate a new address.',
    faq3_q:'What test scenarios is this generator suitable for?',faq3_a:'It is suitable for website form testing, checkout flow testing, UI prototyping, database population, automated testing, and cross-border e-commerce address format validation.',
    cta_title:'Ready to Start Generating Addresses?',cta_sub:'No registration required. Use our virtual address generator for free.',cta_btn:'Get Started',
    footer:'© 2026 Virtual Address Generator | All data is randomly generated for testing purposes only | Does not represent real deliverable addresses',
    copied:'Copied!',saved:'Saved to local!',no_data:'Please generate an address first',
    saved_title:'Saved Addresses',saved_empty:'No saved addresses yet. Generate and click 💾 to save.',saved_count:'{n} addresses saved',
    saved_clear:'Clear All',saved_export:'Export CSV',saved_del:'Delete',saved_confirm:'Clear all saved addresses?',saved_time:'Saved Time',
    field_first:'First Name',field_last:'Last Name',field_gender:'Gender',
    field_phone:'Phone',field_email:'Email',field_street:'Street Address',
    field_city:'City',field_state:'State/Province',field_zip:'ZIP/Postal Code',
    field_full:'Full Address',random:'Random',
    batch_title:'📦 Batch Generate',batch_hint:'Generate multiple addresses at once. Copy or download as JSON / CSV / TSV / Excel / Markdown / Plain Text',batch_count:'Count',batch_format:'Format',batch_unit:'',batch_go:'⚡ Generate Batch',batch_copy:'📋 Copy',batch_download:'⬇ Download',batch_fields:'fields',
    country_us:'🇺🇸 United States',country_ca:'🇨🇦 Canada',country_gb:'🇬🇧 United Kingdom',
    country_au:'🇦🇺 Australia',country_de:'🇩🇪 Germany',country_fr:'🇫🇷 France',
    region_all:'Random (All Regions)'
  },
  ja: {
    logo:'ホーム',hero_title:'仮想アドレスジェネレーター',hero_sub:'米国、カナダ、英国、オーストラリア、ドイツ、フランスの6カ国に対応した実際の形式のランダムアドレスを無料でオンライン生成',
    badge_free:'✅ 無料利用',badge_noreg:'⚡ 登録不要',select_country:'国を選択',select_region:'地域を選択',
    result_title:'生成結果',refresh:'🔄 再生成',copy_all:'📋 すべてコピー',save:'💾 保存',
    gen_btn:'🎯 アドレス生成',empty_hint:'国と地域を選択し、「アドレス生成」をクリック',
    why_title:'この仮想アドレスジェネレーターを使用する理由',
    f1_t:'多国籍対応',f1_d:'米国、カナダ、英国、オーストラリア、ドイツ、フランスの6カ国形式に対応',
    f2_t:'カスタムフィルター',f2_d:'国や州/省でフィルタリングして特定のニーズに対応',
    f3_t:'ワンクリックコピー',f3_d:'各フィールドを個別に、または一度にすべてコピー可能',
    f4_t:'ワンクリック保存',f4_d:'アドレスをローカルに保存していつでもアクセス可能',
    f5_t:'一括エクスポート',f5_d:'ワンクリックでCSVにエクスポートして簡単に統合',
    f6_t:'フォーマット標準',f6_d:'すべてのアドレスが各国のアドレス形式標準に準拠',
    blog_title:'最新記事',blog_desc:'仮想アドレスジェネレーターの使い方と最新アップデート',blog_all:'すべての記事を見る →',
    blog1_title:'米国住所形式完全ガイド',blog1_desc:'米国の住所標準を包括的に解説。通り名のルール、州略称、ZIPコードのエンコーディングなど...',
    blog2_title:'米国Apple IDの登録方法',blog2_desc:'米国Apple IDを作成するためのステップバイステップチュートリアル。住所入力のコツ、免税州の選択、支払い設定...',
    blog3_title:'越境ECアドレス形式比較',blog3_desc:'主要6カ国の越境EC市場におけるアドレス形式の違いを比較し、配送アドレスエラーを防止...',
    faq_title:'よくある質問',
    faq1_q:'生成されたアドレスは実際の配送先住所ですか？',faq1_a:'このツールはアドレス形式とテストデータ参照を生成します。主にフォーム入力、開発テスト、データ入力用です。各アドレスが実際の配送可能な場所に対応していることを保証するものではありません。',
    faq2_q:'郵便番号、市区町村、地域が一致しないと表示されるのはなぜですか？',faq2_a:'多くのウェブサイトでは、市区町村、州/省、郵便番号が同じ地域に属しているかを検証します。市区町村、地域、郵便番号をセットでコピーすることをお勧めします。それでも一致しない場合は、新しいアドレスを生成してください。',
    faq3_q:'このジェネレーターはどのようなテストシナリオに適していますか？',faq3_a:'ウェブサイトのフォームテスト、チェックアウトフローテスト、UIプロトタイピング、データベース入力、自動テスト、越境ECアドレス形式検証などのシナリオに適しています。',
    cta_title:'アドレス生成を始めましょう',cta_sub:'登録不要。無料で仮想アドレスジェネレーターをご利用いただけます。',cta_btn:'はじめる',
    footer:'© 2026 仮想アドレスジェネレーター | すべてのデータはテスト目的でランダムに生成されています | 実際の配送先住所を表すものではありません',
    copied:'コピーしました！',saved:'ローカルに保存しました！',no_data:'最初にアドレスを生成してください',
    saved_title:'保存済みアドレス',saved_empty:'保存されたアドレスはまだありません。生成して 💾 をクリックして保存してください。',saved_count:'{n} 件のアドレスを保存済み',
    saved_clear:'すべてクリア',saved_export:'CSVエクスポート',saved_del:'削除',saved_confirm:'保存したアドレスをすべてクリアしますか？',saved_time:'保存日時',
    field_first:'名 / First Name',field_last:'姓 / Last Name',field_gender:'性別 / Gender',
    field_phone:'電話 / Phone',field_email:'メール / Email',field_street:'住所 / Street Address',
    field_city:'市区町村 / City',field_state:'都道府県 / State',field_zip:'郵便番号 / ZIP Code',
    field_full:'完全な住所 / Full Address',random:'ランダム',
    batch_title:'📦 一括生成',batch_hint:'複数のアドレスを一度に生成。JSON / CSV / TSV / Excel / Markdown / プレーンテキストとしてコピーまたはダウンロード',batch_count:'数量',batch_format:'形式',batch_unit:'件',batch_go:'⚡ 一括生成',batch_copy:'📋 コピー',batch_download:'⬇ ダウンロード',batch_fields:'フィールド',
    country_us:'🇺🇸 アメリカ',country_ca:'🇨🇦 カナダ',country_gb:'🇬🇧 イギリス',
    country_au:'🇦🇺 オーストラリア',country_de:'🇩🇪 ドイツ',country_fr:'🇫🇷 フランス',
    region_all:'ランダム (すべての地域)'
  },
  ko: {
    logo:'홈',hero_title:'가상 주소 생성기',hero_sub:'미국, 캐나다, 영국, 호주, 독일, 프랑스 6개국의 실제 형식의 무작위 주소를 무료 온라인으로 생성',
    badge_free:'✅ 무료 이용',badge_noreg:'⚡ 등록 불필요',select_country:'국가 선택',select_region:'지역 선택',
    result_title:'생성 결과',refresh:'🔄 다시 생성',copy_all:'📋 모두 복사',save:'💾 저장',
    gen_btn:'🎯 주소 생성',empty_hint:'국가와 지역을 선택하고 "주소 생성"을 클릭하세요',
    why_title:'이 가상 주소 생성기를 사용하는 이유',
    f1_t:'다국가 지원',f1_d:'미국, 캐나다, 영국, 호주, 독일, 프랑스 6개국 주소 형식 지원',
    f2_t:'맞춤 필터링',f2_d:'국가 및 주/도별로 필터링하여 특정 요구 사항 충족',
    f3_t:'원클릭 복사',f3_d:'각 필드를 개별적으로 또는 한 번에 모두 복사 가능',
    f4_t:'원클릭 저장',f4_d:'주소를 로컬에 저장하여 언제든지 액세스',
    f5_t:'일괄 내보내기',f5_d:'CSV로 원클릭 내보내기로 쉽게 통합',
    f6_t:'형식 표준',f6_d:'모든 주소가 해당 국가의 주소 형식 표준을 준수',
    blog_title:'최신 기사',blog_desc:'가상 주소 생성기 사용 팁과 최신 업데이트',blog_all:'모든 기사 보기 →',
    blog1_title:'미국 주소 형식 완전 가이드',blog1_desc:'미국 주소 표준에 대한 포괄적인 가이드. 거리 명명 규칙, 주 약어, ZIP 코드 인코딩 등...',
    blog2_title:'미국 Apple ID 등록 방법',blog2_desc:'미국 Apple ID 생성을 위한 단계별 튜토리얼. 주소 입력 팁, 면세주 선택, 결제 설정...',
    blog3_title:'국경 간 전자상거래 주소 형식 비교',blog3_desc:'주요 6개 전자상거래 시장의 주소 형식 차이를 비교하여 판매자의 배송 주소 오류 방지...',
    faq_title:'자주 묻는 질문',
    faq1_q:'생성된 주소가 실제 배송 가능한 주소인가요?',faq1_a:'이 도구는 주소 형식과 테스트 데이터 참조를 생성합니다. 주로 양식 작성, 개발 테스트 및 데이터 입력용입니다. 각 주소가 실제 배송 가능한 위치와 일치한다고 보장하지 않습니다.',
    faq2_q:'우편번호, 도시 또는 지역이 일치하지 않는다고 표시되는 이유는 무엇인가요?',faq2_a:'많은 웹사이트에서 도시, 주/도 및 우편번호가 동일한 지역에 속하는지 확인합니다. 도시, 지역 및 우편번호를 그룹으로 복사하는 것이 좋습니다. 그래도 일치하지 않으면 새 주소를 생성하세요.',
    faq3_q:'이 생성기는 어떤 테스트 시나리오에 적합한가요?',faq3_a:'웹사이트 양식 테스트, 결제 흐름 테스트, UI 프로토타이핑, 데이터베이스 채우기, 자동화 테스트 및 국경 간 전자상거래 주소 형식 검증 등의 시나리오에 적합합니다.',
    cta_title:'주소 생성을 시작할 준비가 되셨나요?',cta_sub:'등록이 필요 없습니다. 무료로 가상 주소 생성기를 사용하세요.',cta_btn:'시작하기',
    footer:'© 2026 가상 주소 생성기 | 모든 데이터는 테스트 목적으로 무작위 생성됩니다 | 실제 배송 가능한 주소를 나타내지 않습니다',
    copied:'복사 완료!',saved:'로컬에 저장 완료!',no_data:'먼저 주소를 생성해 주세요',
    saved_title:'저장된 주소',saved_empty:'저장된 주소가 없습니다. 주소를 생성하고 💾를 클릭하여 저장하세요.',saved_count:'{n}개의 주소 저장됨',
    saved_clear:'모두 지우기',saved_export:'CSV 내보내기',saved_del:'삭제',saved_confirm:'저장된 모든 주소를 지우시겠습니까?',saved_time:'저장 시간',
    field_first:'이름 / First Name',field_last:'성 / Last Name',field_gender:'성별 / Gender',
    field_phone:'전화 / Phone',field_email:'이메일 / Email',field_street:'주소 / Street Address',
    field_city:'도시 / City',field_state:'주/도 / State',field_zip:'우편번호 / ZIP Code',
    field_full:'전체 주소 / Full Address',random:'무작위',
    batch_title:'📦 일괄 생성',batch_hint:'여러 주소를 한 번에 생성. JSON / CSV / TSV / Excel / Markdown / 일반 텍스트로 복사 또는 다운로드',batch_count:'수량',batch_format:'형식',batch_unit:'개',batch_go:'⚡ 일괄 생성',batch_copy:'📋 복사',batch_download:'⬇ 다운로드',batch_fields:'필드',
    country_us:'🇺🇸 미국',country_ca:'🇨🇦 캐나다',country_gb:'🇬🇧 영국',
    country_au:'🇦🇺 호주',country_de:'🇩🇪 독일',country_fr:'🇫🇷 프랑스',
    region_all:'무작위 (모든 지역)'
  }
};
var currentLang = currentLang || 'zh';
function t(key){return i18n[currentLang][key]||key}
function switchLang(lang){
  if(lang==='en') window.location.href='en/index.html';
  else if(lang==='ja') window.location.href='ja/index.html';
  else if(lang==='ko') window.location.href='ko/index.html';
  else window.location.href='../index.html';
}

// ==================== 6国数据 ====================
const US_SVG='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" class="flag-icon"><rect width="24" height="16" fill="#B22234"/><rect width="24" height="1.14" y="1.14" fill="#fff"/><rect width="24" height="1.14" y="3.43" fill="#fff"/><rect width="24" height="1.14" y="5.71" fill="#fff"/><rect width="24" height="1.14" y="8" fill="#fff"/><rect width="24" height="1.14" y="10.29" fill="#fff"/><rect width="24" height="1.14" y="12.57" fill="#fff"/><rect width="10.5" height="7.43" fill="#3C3B6E"/></svg>';
const CA_SVG='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" class="flag-icon"><rect width="24" height="16" fill="#fff"/><rect width="6" height="16" fill="red"/><rect width="6" height="16" x="18" fill="red"/><path d="M12 3l1.5 4.5h4.5l-3.5 3 1.5 4.5-4-3-4 3 1.5-4.5-3.5-3h4.5z" fill="red"/></svg>';
const GB_SVG='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" class="flag-icon"><rect width="24" height="16" fill="#012169"/><path d="M0 0l24 16M24 0L0 16" stroke="#fff" stroke-width="3"/><path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" stroke-width="1"/><path d="M12 0v16M0 8h24" stroke="#fff" stroke-width="5"/><path d="M12 0v16M0 8h24" stroke="#C8102E" stroke-width="2.5"/></svg>';
const AU_SVG='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" class="flag-icon"><rect width="24" height="16" fill="#00008B"/><path d="M0 0l12 16M12 0L0 16" stroke="#fff" stroke-width="2"/><path d="M0 0l12 16M12 0L0 16" stroke="#C8102E" stroke-width=".8"/><path d="M6 0v16M0 8h12" stroke="#fff" stroke-width="3"/><path d="M6 0v16M0 8h12" stroke="#C8102E" stroke-width="1.5"/><circle cx="20" cy="5" r="1.2" fill="#fff"/><circle cx="22" cy="11" r="1.2" fill="#fff"/><circle cx="18" cy="13" r="1.2" fill="#fff"/><circle cx="16" cy="7" r="1.2" fill="#fff"/></svg>';
const DE_SVG='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" class="flag-icon"><rect width="24" height="5.33" fill="#000"/><rect width="24" height="5.33" y="5.33" fill="#D00"/><rect width="24" height="5.33" y="10.67" fill="#FFCE00"/></svg>';
const FR_SVG='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" class="flag-icon"><rect width="8" height="16" fill="#002395"/><rect width="8" height="16" x="8" fill="#fff"/><rect width="8" height="16" x="16" fill="#ED2939"/></svg>';
const countryData = {
  us: {
    name: 'United States', nameZh: '美国', flagSvg: US_SVG,
    states: {
      'AL': {full:'Alabama',zh:'阿拉巴马州',cities:['Birmingham','Montgomery','Mobile','Huntsville','Tuscaloosa'],zipPrefixes:['352','361','366','358','354']},
      'AK': {full:'Alaska',zh:'阿拉斯加州',cities:['Anchorage','Fairbanks','Juneau','Sitka','Ketchikan'],zipPrefixes:['995','997','998','998','999']},
      'AZ': {full:'Arizona',zh:'亚利桑那州',cities:['Phoenix','Tucson','Mesa','Chandler','Scottsdale'],zipPrefixes:['850','857','852','852','852']},
      'AR': {full:'Arkansas',zh:'阿肯色州',cities:['Little Rock','Fort Smith','Fayetteville','Springdale','Jonesboro'],zipPrefixes:['722','729','727','727','724']},
      'CA': {full:'California',zh:'加利福尼亚州',cities:['Los Angeles','San Francisco','San Diego','Sacramento','San Jose'],zipPrefixes:['900','941','921','958','951']},
      'CO': {full:'Colorado',zh:'科罗拉多州',cities:['Denver','Colorado Springs','Aurora','Fort Collins','Boulder'],zipPrefixes:['802','809','800','805','803']},
      'CT': {full:'Connecticut',zh:'康涅狄格州',cities:['Bridgeport','New Haven','Hartford','Stamford','Waterbury'],zipPrefixes:['066','065','061','069','067']},
      'DE': {full:'Delaware',zh:'特拉华州',cities:['Wilmington','Dover','Newark','Middletown','Smyrna'],zipPrefixes:['198','199','197','197','199']},
      'DC': {full:'District of Columbia',zh:'华盛顿特区',cities:['Washington'],zipPrefixes:['200']},
      'FL': {full:'Florida',zh:'佛罗里达州',cities:['Miami','Orlando','Tampa','Jacksonville','Tallahassee'],zipPrefixes:['331','328','336','322','323']},
      'GA': {full:'Georgia',zh:'佐治亚州',cities:['Atlanta','Augusta','Savannah','Athens','Macon'],zipPrefixes:['303','309','314','306','312']},
      'HI': {full:'Hawaii',zh:'夏威夷州',cities:['Honolulu','Hilo','Kailua','Kapolei','Pearl City'],zipPrefixes:['968','967','967','967','967']},
      'ID': {full:'Idaho',zh:'爱达荷州',cities:['Boise','Meridian','Nampa','Idaho Falls','Pocatello'],zipPrefixes:['837','836','836','834','832']},
      'IL': {full:'Illinois',zh:'伊利诺伊州',cities:['Chicago','Aurora','Rockford','Joliet','Naperville'],zipPrefixes:['606','605','611','604','605']},
      'IN': {full:'Indiana',zh:'印第安纳州',cities:['Indianapolis','Fort Wayne','Evansville','South Bend','Carmel'],zipPrefixes:['462','468','477','466','460']},
      'IA': {full:'Iowa',zh:'爱荷华州',cities:['Des Moines','Cedar Rapids','Davenport','Sioux City','Iowa City'],zipPrefixes:['503','524','528','511','522']},
      'KS': {full:'Kansas',zh:'堪萨斯州',cities:['Wichita','Overland Park','Kansas City','Olathe','Topeka'],zipPrefixes:['672','662','661','660','666']},
      'KY': {full:'Kentucky',zh:'肯塔基州',cities:['Louisville','Lexington','Bowling Green','Owensboro','Covington'],zipPrefixes:['402','405','421','423','410']},
      'LA': {full:'Louisiana',zh:'路易斯安那州',cities:['New Orleans','Baton Rouge','Shreveport','Lafayette','Lake Charles'],zipPrefixes:['701','708','711','705','706']},
      'ME': {full:'Maine',zh:'缅因州',cities:['Portland','Lewiston','Bangor','South Portland','Auburn'],zipPrefixes:['041','042','044','041','042']},
      'MD': {full:'Maryland',zh:'马里兰州',cities:['Baltimore','Frederick','Rockville','Gaithersburg','Bowie'],zipPrefixes:['212','217','208','208','207']},
      'MA': {full:'Massachusetts',zh:'马萨诸塞州',cities:['Boston','Worcester','Springfield','Cambridge','Lowell'],zipPrefixes:['021','016','011','021','018']},
      'MI': {full:'Michigan',zh:'密歇根州',cities:['Detroit','Grand Rapids','Ann Arbor','Lansing','Flint'],zipPrefixes:['482','495','481','489','485']},
      'MN': {full:'Minnesota',zh:'明尼苏达州',cities:['Minneapolis','Saint Paul','Rochester','Duluth','Bloomington'],zipPrefixes:['554','551','559','558','554']},
      'MS': {full:'Mississippi',zh:'密西西比州',cities:['Jackson','Gulfport','Southaven','Hattiesburg','Biloxi'],zipPrefixes:['392','395','386','394','395']},
      'MO': {full:'Missouri',zh:'密苏里州',cities:['Kansas City','St. Louis','Springfield','Columbia','Independence'],zipPrefixes:['641','631','658','652','640']},
      'MT': {full:'Montana',zh:'蒙大拿州',cities:['Billings','Missoula','Great Falls','Bozeman','Helena'],zipPrefixes:['591','598','594','597','596']},
      'NE': {full:'Nebraska',zh:'内布拉斯加州',cities:['Omaha','Lincoln','Bellevue','Grand Island','Kearney'],zipPrefixes:['681','685','680','688','688']},
      'NV': {full:'Nevada',zh:'内华达州',cities:['Las Vegas','Reno','Henderson','North Las Vegas','Sparks'],zipPrefixes:['891','895','890','890','894']},
      'NH': {full:'New Hampshire',zh:'新罕布什尔州',cities:['Manchester','Nashua','Concord','Derry','Dover'],zipPrefixes:['031','030','033','030','038']},
      'NJ': {full:'New Jersey',zh:'新泽西州',cities:['Newark','Jersey City','Paterson','Elizabeth','Trenton'],zipPrefixes:['071','073','075','072','086']},
      'NM': {full:'New Mexico',zh:'新墨西哥州',cities:['Albuquerque','Las Cruces','Santa Fe','Rio Rancho','Roswell'],zipPrefixes:['871','880','875','871','882']},
      'NY': {full:'New York',zh:'纽约州',cities:['New York City','Buffalo','Rochester','Syracuse','Albany'],zipPrefixes:['100','142','146','132','122']},
      'NC': {full:'North Carolina',zh:'北卡罗来纳州',cities:['Charlotte','Raleigh','Greensboro','Durham','Chapel Hill'],zipPrefixes:['282','276','274','277','275']},
      'ND': {full:'North Dakota',zh:'北达科他州',cities:['Fargo','Bismarck','Grand Forks','Minot','West Fargo'],zipPrefixes:['581','585','582','587','580']},
      'OH': {full:'Ohio',zh:'俄亥俄州',cities:['Columbus','Cleveland','Cincinnati','Toledo','Akron'],zipPrefixes:['432','441','452','436','443']},
      'OK': {full:'Oklahoma',zh:'俄克拉荷马州',cities:['Oklahoma City','Tulsa','Norman','Broken Arrow','Edmond'],zipPrefixes:['731','741','730','740','730']},
      'OR': {full:'Oregon',zh:'俄勒冈州',cities:['Portland','Salem','Eugene','Gresham','Hillsboro'],zipPrefixes:['972','973','974','970','971']},
      'PA': {full:'Pennsylvania',zh:'宾夕法尼亚州',cities:['Philadelphia','Pittsburgh','Allentown','Erie','Reading'],zipPrefixes:['191','152','181','165','196']},
      'RI': {full:'Rhode Island',zh:'罗德岛州',cities:['Providence','Warwick','Cranston','Pawtucket','East Providence'],zipPrefixes:['029','028','029','028','029']},
      'SC': {full:'South Carolina',zh:'南卡罗来纳州',cities:['Charleston','Columbia','North Charleston','Mount Pleasant','Rock Hill'],zipPrefixes:['294','292','294','294','297']},
      'SD': {full:'South Dakota',zh:'南达科他州',cities:['Sioux Falls','Rapid City','Aberdeen','Brookings','Watertown'],zipPrefixes:['571','577','574','570','572']},
      'TN': {full:'Tennessee',zh:'田纳西州',cities:['Nashville','Memphis','Knoxville','Chattanooga','Clarksville'],zipPrefixes:['372','381','379','374','370']},
      'TX': {full:'Texas',zh:'德克萨斯州',cities:['Houston','San Antonio','Dallas','Austin','Fort Worth'],zipPrefixes:['770','782','752','787','761']},
      'UT': {full:'Utah',zh:'犹他州',cities:['Salt Lake City','West Valley City','Provo','West Jordan','Orem'],zipPrefixes:['841','841','846','840','840']},
      'VT': {full:'Vermont',zh:'佛蒙特州',cities:['Burlington','South Burlington','Rutland','Barre','Montpelier'],zipPrefixes:['054','054','057','056','056']},
      'VA': {full:'Virginia',zh:'弗吉尼亚州',cities:['Virginia Beach','Norfolk','Chesapeake','Richmond','Arlington'],zipPrefixes:['234','235','233','232','222']},
      'WA': {full:'Washington',zh:'华盛顿州',cities:['Seattle','Spokane','Tacoma','Vancouver','Bellevue'],zipPrefixes:['981','992','984','986','980']},
      'WV': {full:'West Virginia',zh:'西弗吉尼亚州',cities:['Charleston','Huntington','Morgantown','Parkersburg','Wheeling'],zipPrefixes:['253','257','265','261','260']},
      'WI': {full:'Wisconsin',zh:'威斯康星州',cities:['Milwaukee','Madison','Green Bay','Kenosha','Racine'],zipPrefixes:['532','537','543','531','534']},
      'WY': {full:'Wyoming',zh:'怀俄明州',cities:['Cheyenne','Casper','Laramie','Gillette','Sheridan'],zipPrefixes:['820','826','820','827','828']}
    },
    streets: ['Main St','Oak Ave','Park Rd','Elm St','Washington Blvd','First Ave','Second St','Third Ave','Maple Dr','Cedar Ln','Birch Rd','Pine St','Lake Dr','Hill Rd','Walnut Ave','Sunset Blvd','Broadway','Church St','Market St','Highland Ave'],
    firstName: ['James','John','Robert','Michael','William','David','Richard','Joseph','Mary','Patricia','Jennifer','Linda','Barbara','Elizabeth','Susan','Jessica','Sarah','Karen','Lisa','Nancy','Betty','Ashley','Kimberly','Emily','Donna','Michelle'],
    lastName: ['Smith','Johnson','Williams','Brown','Jones','Garcia','Miller','Davis','Rodriguez','Martinez','Hernandez','Lopez','Gonzalez','Wilson','Anderson','Thomas','Taylor','Moore','Jackson','Martin','Lee','Perez','Thompson','White','Harris','Sanchez','Clark','Ramirez','Lewis','Robinson'],
    phonePrefix: '+1', areaCodes: ['201','202','212','213','305','310','312','404','415','469','503','512','602','614','702','713','817','858','917'],
    zipPattern: (p)=>p?p+String(Math.floor(Math.random()*100)).padStart(2,'0'):String(Math.floor(10000+Math.random()*90000)),
    countryName: 'United States'
  },
  ca: {
    name: 'Canada', nameZh: '加拿大', flagSvg: CA_SVG,
    states: {
      'ON': {full:'Ontario',zh:'安大略省',cities:['Toronto','Ottawa','Hamilton','London','Windsor'],zipPrefixes:['M5A','K1A','L8P','N6A','N9A']},
      'QC': {full:'Quebec',zh:'魁北克省',cities:['Montreal','Quebec City','Laval','Gatineau','Sherbrooke'],zipPrefixes:['H2X','G1R','H7T','J8X','J1H']},
      'BC': {full:'British Columbia',zh:'不列颠哥伦比亚省',cities:['Vancouver','Victoria','Surrey','Burnaby','Richmond'],zipPrefixes:['V6B','V8W','V3T','V5G','V6X']},
      'AB': {full:'Alberta',zh:'阿尔伯塔省',cities:['Calgary','Edmonton','Red Deer','Lethbridge','Medicine Hat'],zipPrefixes:['T2P','T5J','T4N','T1J','T1A']},
      'MB': {full:'Manitoba',zh:'曼尼托巴省',cities:['Winnipeg','Brandon','Steinbach','Thompson','Portage la Prairie'],zipPrefixes:['R3C','R7A','R5G','R8N','R1N']},
      'SK': {full:'Saskatchewan',zh:'萨斯喀彻温省',cities:['Saskatoon','Regina','Prince Albert','Moose Jaw','Yorkton'],zipPrefixes:['S7K','S4P','S6V','S6H','S3N']},
      'NS': {full:'Nova Scotia',zh:'新斯科舍省',cities:['Halifax','Sydney','Truro','New Glasgow','Glace Bay'],zipPrefixes:['B3J','B1P','B2N','B2H','B1A']},
      'NB': {full:'New Brunswick',zh:'新不伦瑞克省',cities:['Moncton','Saint John','Fredericton','Dieppe','Miramichi'],zipPrefixes:['E1C','E2L','E3B','E1A','E1N']}
    },
    streets: ['Main St','King St','Queen St','Yonge St','Bay St','College St','Dundas St','Bloor St','Front St','Church St'],
    firstName: ['Liam','Noah','Jackson','Lucas','Benjamin','Olivia','Emma','Charlotte','Amelia','Sophia','William','Ethan','James','Alexander','Henry','Mia','Evelyn','Ava','Isabella','Chloe'],
    lastName: ['Smith','Brown','Tremblay','Martin','Roy','Wilson','MacDonald','Gagnon','Johnson','Taylor','Campbell','Anderson','Thompson','Lee','White','Young','Scott','Clark','Walker','Thomas'],
    phonePrefix: '+1', areaCodes: ['416','604','403','514','780','905','613','519','289','647'],
    zipPattern: (p)=>{const L='ABCDEFGHIJKLMNOPQRSTUVWXYZ',D='0123456789';return p?p+' '+D[randInt(0,9)]+L[randInt(0,25)]+D[randInt(0,9)]:L[randInt(0,25)]+D[randInt(0,9)]+L[randInt(0,25)]+' '+D[randInt(0,9)]+L[randInt(0,25)]+D[randInt(0,9)]},
    countryName: 'Canada'
  },
  gb: {
    name: 'United Kingdom', nameZh: '英国', flagSvg: GB_SVG,
    states: {
      'ENG': {full:'England',zh:'英格兰',cities:['London','Manchester','Birmingham','Liverpool','Leeds'],zipPrefixes:['SW','M','B','L','LS']},
      'SCT': {full:'Scotland',zh:'苏格兰',cities:['Edinburgh','Glasgow','Aberdeen','Dundee','Stirling'],zipPrefixes:['EH','G','AB','DD','FK']},
      'WLS': {full:'Wales',zh:'威尔士',cities:['Cardiff','Swansea','Newport','Wrexham','Barry'],zipPrefixes:['CF','SA','NP','LL','CF']},
      'NIR': {full:'Northern Ireland',zh:'北爱尔兰',cities:['Belfast','Derry','Lisburn','Newtownabbey','Bangor'],zipPrefixes:['BT','BT','BT','BT','BT']}
    },
    streets: ['High Street','Church Lane','Victoria Road','Mill Lane','School Lane','The Green','New Road','Manor Road','Park Road','Queens Road'],
    firstName: ['Oliver','George','Harry','Jack','Charlie','Amelia','Olivia','Isla','Emily','Poppy','Arthur','Noah','Leo','Oscar','Muhammad','Ava','Mia','Isabella','Sophie','Lily'],
    lastName: ['Smith','Jones','Taylor','Brown','Williams','Wilson','Johnson','Davies','Robinson','Wright','Thompson','Evans','Walker','White','Roberts','Green','Hall','Wood','Clarke','Jackson'],
    phonePrefix: '+44', areaCodes: ['20','121','161','113','141','151','114','117','131','191'],
    zipPattern: (p)=>{const L='ABCDEFGHIJKLMNOPQRSTUVWXYZ',D='0123456789';return p?p+D[randInt(0,9)]+' '+D[randInt(0,9)]+L[randInt(0,25)]+L[randInt(0,25)]:L[randInt(0,25)]+L[randInt(0,25)]+D[randInt(0,9)]+' '+D[randInt(0,9)]+L[randInt(0,25)]+L[randInt(0,25)]},
    countryName: 'United Kingdom'
  },
  au: {
    name: 'Australia', nameZh: '澳大利亚', flagSvg: AU_SVG,
    states: {
      'NSW': {full:'New South Wales',zh:'新南威尔士州',cities:['Sydney','Newcastle','Wollongong','Maitland','Albury'],zipPrefixes:['2000','2300','2500','2320','2640']},
      'VIC': {full:'Victoria',zh:'维多利亚州',cities:['Melbourne','Geelong','Ballarat','Bendigo','Shepparton'],zipPrefixes:['3000','3220','3350','3550','3630']},
      'QLD': {full:'Queensland',zh:'昆士兰州',cities:['Brisbane','Gold Coast','Townsville','Cairns','Toowoomba'],zipPrefixes:['4000','4217','4810','4870','4350']},
      'WA': {full:'Western Australia',zh:'西澳大利亚州',cities:['Perth','Fremantle','Rockingham','Mandurah','Bunbury'],zipPrefixes:['6000','6160','6168','6210','6230']},
      'SA': {full:'South Australia',zh:'南澳大利亚州',cities:['Adelaide','Mount Gambier','Whyalla','Port Augusta','Port Pirie'],zipPrefixes:['5000','5290','5600','5700','5540']},
      'TAS': {full:'Tasmania',zh:'塔斯马尼亚州',cities:['Hobart','Launceston','Devonport','Burnie','Kingston'],zipPrefixes:['7000','7250','7310','7320','7050']},
      'NT': {full:'Northern Territory',zh:'北领地',cities:['Darwin','Alice Springs','Katherine','Palmerston','Tennant Creek'],zipPrefixes:['0800','0870','0850','0830','0860']},
      'ACT': {full:'Australian Capital Territory',zh:'首都领地',cities:['Canberra','Belconnen','Tuggeranong','Woden','Gungahlin'],zipPrefixes:['2600','2617','2900','2606','2912']}
    },
    streets: ['Collins Street','Bourke Street','Flinders Street','Elizabeth Street','Swanston Street','King Street','Queen Street','George Street','Pitt Street','Market Street'],
    firstName: ['Oliver','Jack','Noah','William','Thomas','Charlotte','Olivia','Amelia','Isla','Mia','James','Lucas','Henry','Ethan','Liam','Ava','Sophie','Grace','Ella','Chloe'],
    lastName: ['Smith','Jones','Brown','Williams','Wilson','Taylor','Johnson','Lee','Anderson','Thompson','Walker','White','Harris','Martin','Ryan','Robinson','Kelly','Thomas','Davis','Clark'],
    phonePrefix: '+61', areaCodes: ['2','3','7','8','4'],
    zipPattern: (p)=>p?p:String(Math.floor(1000+Math.random()*9000)),
    countryName: 'Australia'
  },
  de: {
    name: 'Germany', nameZh: '德国', flagSvg: DE_SVG,
    states: {
      'BY': {full:'Bavaria',zh:'巴伐利亚州',cities:['Munich','Nuremberg','Augsburg','Würzburg','Regensburg'],zipPrefixes:['80','90','86','97','93']},
      'BW': {full:'Baden-Württemberg',zh:'巴登-符腾堡州',cities:['Stuttgart','Mannheim','Karlsruhe','Freiburg','Heidelberg'],zipPrefixes:['70','68','76','79','69']},
      'NW': {full:'North Rhine-Westphalia',zh:'北莱茵-威斯特法伦州',cities:['Cologne','Düsseldorf','Dortmund','Essen','Duisburg'],zipPrefixes:['50','40','44','45','47']},
      'HE': {full:'Hesse',zh:'黑森州',cities:['Frankfurt','Wiesbaden','Kassel','Darmstadt','Offenbach'],zipPrefixes:['60','65','34','64','63']},
      'SN': {full:'Saxony',zh:'萨克森州',cities:['Leipzig','Dresden','Chemnitz','Zwickau','Görlitz'],zipPrefixes:['04','01','09','08','02']},
      'NI': {full:'Lower Saxony',zh:'下萨克森州',cities:['Hanover','Braunschweig','Osnabrück','Oldenburg','Wolfsburg'],zipPrefixes:['30','38','49','26','38']},
      'RP': {full:'Rhineland-Palatinate',zh:'莱茵兰-普法尔茨州',cities:['Mainz','Ludwigshafen','Koblenz','Trier','Kaiserslautern'],zipPrefixes:['55','67','56','54','67']},
      'BE': {full:'Berlin',zh:'柏林',cities:['Berlin'],zipPrefixes:['10']}
    },
    streets: ['Hauptstraße','Bahnhofstraße','Kirchstraße','Gartenstraße','Schulstraße','Mühlenstraße','Dorfstraße','Lindenstraße','Bergstraße','Waldstraße'],
    firstName: ['Maximilian','Paul','Alexander','Felix','Leon','Sophie','Emma','Mia','Hannah','Anna','Lukas','Jonas','Elias','Noah','Ben','Marie','Lena','Emilia','Lina','Lea'],
    lastName: ['Müller','Schmidt','Schneider','Fischer','Weber','Meyer','Wagner','Becker','Hoffmann','Schäfer','Koch','Bauer','Richter','Klein','Wolf','Schröder','Neumann','Schwarz','Zimmermann','Braun'],
    phonePrefix: '+49', areaCodes: ['30','40','69','89','711','221','211','341','511','201'],
    zipPattern: (p)=>p?p+String(Math.floor(Math.random()*1000)).padStart(3,'0'):String(Math.floor(10000+Math.random()*90000)),
    countryName: 'Germany'
  },
  fr: {
    name: 'France', nameZh: '法国', flagSvg: FR_SVG,
    states: {
      'IDF': {full:'Île-de-France',zh:'法兰西岛',cities:['Paris','Boulogne-Billancourt','Saint-Denis','Argenteuil','Montreuil'],zipPrefixes:['75','92','93','95','93']},
      'PAC': {full:'Provence-Alpes-Côte d\'Azur',zh:'普罗旺斯-阿尔卑斯-蓝色海岸',cities:['Marseille','Nice','Toulon','Aix-en-Provence','Antibes'],zipPrefixes:['13','06','83','13','06']},
      'ARA': {full:'Auvergne-Rhône-Alpes',zh:'奥弗涅-罗讷-阿尔卑斯',cities:['Lyon','Grenoble','Saint-Étienne','Villeurbanne','Clermont-Ferrand'],zipPrefixes:['69','38','42','69','63']},
      'NAQ': {full:'Nouvelle-Aquitaine',zh:'新阿基坦',cities:['Bordeaux','Limoges','Poitiers','Pau','La Rochelle'],zipPrefixes:['33','87','86','64','17']},
      'OCC': {full:'Occitanie',zh:'奥克西塔尼',cities:['Toulouse','Montpellier','Nîmes','Perpignan','Béziers'],zipPrefixes:['31','34','30','66','34']},
      'HDF': {full:'Hauts-de-France',zh:'上法兰西',cities:['Lille','Amiens','Roubaix','Tourcoing','Dunkerque'],zipPrefixes:['59','80','59','59','59']},
      'GES': {full:'Grand Est',zh:'大东部',cities:['Strasbourg','Nancy','Metz','Reims','Mulhouse'],zipPrefixes:['67','54','57','51','68']},
      'NOR': {full:'Normandy',zh:'诺曼底',cities:['Rouen','Le Havre','Caen','Cherbourg','Évreux'],zipPrefixes:['76','76','14','50','27']}
    },
    streets: ['Rue de la Paix','Avenue des Champs','Rue Victor Hugo','Place de la République','Boulevard Saint-Germain','Rue de Rivoli','Avenue Montaigne','Rue du Faubourg','Place Vendôme','Rue de la Liberté'],
    firstName: ['Lucas','Gabriel','Louis','Raphaël','Jules','Emma','Jade','Louise','Alice','Chloé','Léo','Adam','Hugo','Arthur','Nathan','Lina','Léa','Manon','Sarah','Camille'],
    lastName: ['Martin','Bernard','Thomas','Petit','Robert','Richard','Durand','Dubois','Moreau','Laurent','Simon','Michel','Lefebvre','Leroy','Roux','David','Bertrand','Morel','Fournier','Girard'],
    phonePrefix: '+33', areaCodes: ['1','4','5','2','3','6','7'],
    zipPattern: (p)=>p?p+String(Math.floor(Math.random()*1000)).padStart(3,'0'):String(Math.floor(10000+Math.random()*90000)),
    countryName: 'France'
  }
};

const emailDomains=['gmail.com','yahoo.com','outlook.com','hotmail.com','icloud.com','aol.com','protonmail.com'];

function rand(arr){return arr[Math.floor(Math.random()*arr.length)]}
function randInt(min,max){return Math.floor(min+Math.random()*(max-min+1))}

let selectedCountry='us';
let selectedState=null;

// ==================== 下拉渲染 ====================
function renderCountrySelect(){
  const drop=document.getElementById('countrySelDrop');
  const label=document.getElementById('countrySelLabel');
  const trigger=document.getElementById('countrySelTrigger');
  const countries=Object.keys(countryData);
  // Build option list with ARIA + roving tabindex.
  drop.innerHTML=countries.map((c,i)=>{
    const d=countryData[c];
    const text=d.flagSvg+' '+(currentLang==='zh'?d.nameZh:d.name);
    const sel=c===selectedCountry?' sel':'';
    const selAttr=c===selectedCountry?'true':'false';
    // First option gets tabindex=0 so it's focusable when the dropdown opens.
    return `<div class="cust-sel-opt${sel}" role="option" data-val="${c}" tabindex="${i===0?'0':'-1'}" aria-selected="${selAttr}">${text}</div>`;
  }).join('');
  // Mark the trigger + drop with proper combobox / listbox semantics.
  trigger.setAttribute('role','combobox');
  trigger.setAttribute('aria-haspopup','listbox');
  trigger.setAttribute('aria-expanded', drop.classList.contains('open') ? 'true' : 'false');
  drop.setAttribute('role','listbox');
  const sd=countryData[selectedCountry];
  label.innerHTML=sd.flagSvg+' '+(currentLang==='zh'?sd.nameZh:sd.name);
  trigger.onclick=function(e){
    e.stopPropagation();
    const isOpen=drop.classList.contains('open');
    closeAllDropdowns();
    if(!isOpen){openCountryDropdown();}
  };
  trigger.onkeydown=function(e){
    if(e.key==='Enter'||e.key===' '||e.key==='ArrowDown'){
      e.preventDefault();openCountryDropdown();
    }else if(e.key==='Escape'&&drop.classList.contains('open')){
      e.preventDefault();closeAllDropdowns();trigger.focus();
    }
  };
  drop.querySelectorAll('.cust-sel-opt').forEach(opt=>{
    opt.onclick=function(e){
      e.stopPropagation();
      selectedCountry=this.dataset.val;
      selectedState=null;
      closeAllDropdowns();
      renderCountrySelect();
      trigger.focus();
    };
    opt.onkeydown=function(e){
      const opts=Array.from(drop.querySelectorAll('.cust-sel-opt'));
      const idx=opts.indexOf(this);
      if(e.key==='ArrowDown'){
        e.preventDefault();
        opts[(idx+1)%opts.length].focus();
      }else if(e.key==='ArrowUp'){
        e.preventDefault();
        opts[(idx-1+opts.length)%opts.length].focus();
      }else if(e.key==='Home'){
        e.preventDefault();opts[0].focus();
      }else if(e.key==='End'){
        e.preventDefault();opts[opts.length-1].focus();
      }else if(e.key==='Enter'||e.key===' '){
        e.preventDefault();this.click();
      }else if(e.key==='Escape'||e.key==='Tab'){
        closeAllDropdowns();trigger.focus();
      }
    };
  });
  renderStateSelect();
}

function openCountryDropdown(){
  const drop=document.getElementById('countrySelDrop');
  const trigger=document.getElementById('countrySelTrigger');
  if(!drop) return;
  drop.classList.add('open');
  trigger.classList.add('open');
  trigger.setAttribute('aria-expanded','true');
  // Focus the selected option (or the first one).
  const target=drop.querySelector('.cust-sel-opt.sel')||drop.querySelector('.cust-sel-opt');
  if(target) target.focus();
}

function closeAllDropdowns(){
  document.querySelectorAll('.cust-sel-drop.open').forEach(d=>{
    d.classList.remove('open');
  });
  document.querySelectorAll('.cust-sel-trigger.open').forEach(t=>{
    t.classList.remove('open');
    t.setAttribute('aria-expanded','false');
  });
}
document.addEventListener('click',closeAllDropdowns);

function renderStateSelect(){
  const ss=document.getElementById('stateSelect');
  const data=countryData[selectedCountry];
  const states=Object.entries(data.states);
  ss.innerHTML=`
    <option value="">🎲 ${t('region_all')}</option>
    ${states.map(([abbr,s])=>`
      <option value="${abbr}"${selectedState===abbr?' selected':''}>${s.abbr||abbr} - ${currentLang==='zh'?s.zh:s.full}</option>
    `).join('')}
  `;
}

function onCountryChange(){}

function onStateChange(){
  selectedState=document.getElementById('stateSelect').value||null;
}

// ==================== 生成地址 ====================
function generateAddress(){
  const data=countryData[selectedCountry];
  const stateKeys=Object.keys(data.states);
  const stKey=selectedState||rand(stateKeys);
  const st=data.states[stKey];
  const cityIdx=randInt(0,st.cities.length-1);
  const city=st.cities[cityIdx];
  const zipPrefix=st.zipPrefixes?st.zipPrefixes[cityIdx]:'';
  const street=randInt(1,9999)+' '+rand(data.streets);
  const zip=data.zipPattern(zipPrefix);
  const firstName=rand(data.firstName);
  const lastName=rand(data.lastName);
  const gender=Math.random()>0.5?'Male':'Female';
  const phone=data.phonePrefix+'-'+rand(data.areaCodes)+'-'+randInt(1000000,9999999);
  const email=firstName.toLowerCase()+'.'+lastName.toLowerCase()+randInt(1,99)+'@'+rand(emailDomains);
  const fullAddr=(()=>{
    const c=selectedCountry;
    if(c==='gb') return street+'\n'+city+'\n'+zip+'\n'+data.countryName;
    if(c==='de'||c==='fr') return street+'\n'+zip+' '+city+'\n'+data.countryName;
    return street+'\n'+city+', '+stKey+' '+zip+'\n'+data.countryName;
  })();
  const stateName=st.full;
  return{firstName,lastName,gender,phone,email,street,city,state:stateName,stateAbbr:stKey,zip,fullAddr,country:data.countryName};
}

function renderResult(addr){
  const fields=[
    {key:'firstName',label:t('field_first'),icon:'👤'},
    {key:'lastName',label:t('field_last'),icon:'👤'},
    {key:'gender',label:t('field_gender'),icon:'⚧'},
    {key:'phone',label:t('field_phone'),icon:'📞'},
    {key:'email',label:t('field_email'),icon:'📧'},
    {key:'street',label:t('field_street'),icon:'📍'},
    {key:'city',label:t('field_city'),icon:'🏙'},
    {key:'state',label:t('field_state'),icon:'🗺'},
    {key:'zip',label:t('field_zip'),icon:'📮'},
    {key:'fullAddr',label:t('field_full'),icon:'📝'}
  ];
  document.getElementById('resultBody').innerHTML=fields.map(f=>`
    <div class="field-row">
      <span class="field-icon">${f.icon}</span>
      <span class="field-label">${f.label}</span>
      <span class="field-value">${escapeHtml(f.key==='fullAddr'?addr[f.key]:String(addr[f.key]))}</span>
      <button class="field-copy-btn" onclick="copyField('${f.key}',this)" title="Copy">📋</button>
    </div>
  `).join('');
}

function generateOne(){
  window.currentAddress=generateAddress();
  renderResult(window.currentAddress);
  document.getElementById('resultSection').scrollIntoView({behavior:'smooth',block:'start'});
}

// ==================== 批量生成 ====================
const BATCH_HEADERS=['firstName','lastName','gender','phone','email','street','city','state','zip','country'];

function batchRun(){
  const input=document.getElementById('batchCount');
  const fmtSel=document.getElementById('batchFormat');
  const out=document.getElementById('batchOutput');
  const ta=document.getElementById('batchTextarea');
  const meta=document.getElementById('batchMeta');
  let n=parseInt(input.value,10);
  if(isNaN(n)||n<1) n=1;
  if(n>50) n=50;
  input.value=n;
  const fmt=fmtSel.value;
  const rows=[];
  for(let i=0;i<n;i++) rows.push(generateAddress());
  window.currentBatch=rows;
  const {text,filename,mime}=formatBatch(rows,fmt);
  ta.value=text;
  meta.textContent=(t('batch_count')||'Count')+': '+n+' · '+(t('batch_format')||'Format')+': '+fmtSel.options[fmtSel.selectedIndex].text+' · '+rows.length+' × '+BATCH_HEADERS.length+' '+(t('batch_fields')||'fields');
  out.hidden=false;
  out.dataset.filename=filename;
  out.dataset.mime=mime;
  out.scrollIntoView({behavior:'smooth',block:'start'});
}

function batchCopy(){
  const ta=document.getElementById('batchTextarea');
  if(!ta.value){showToast(t('no_data'));return}
  copyText(ta.value).then(()=>{
    const btn=document.getElementById('batchCopyBtn');
    btn.classList.add('copied');
    const orig=btn.textContent;
    btn.textContent='✅';
    setTimeout(()=>{btn.classList.remove('copied');btn.textContent=orig},1500);
    showToast(t('copied'));
  });
}

function batchDownload(){
  const out=document.getElementById('batchOutput');
  const ta=document.getElementById('batchTextarea');
  if(!ta.value){showToast(t('no_data'));return}
  const blob=new Blob([ta.value],{type:out.dataset.mime||'text/plain;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download=out.dataset.filename||'addresses.txt';a.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
  showToast(t('saved'));
}

function formatBatch(rows,fmt){
  const ts=new Date().toISOString().replace(/[:.]/g,'-').slice(0,19);
  switch(fmt){
    case 'json':{
      const text='[\n'+rows.map(r=>'  '+JSON.stringify(r)).join(',\n')+'\n]\n';
      return {text,mime:'application/json;charset=utf-8',filename:`addresses-${ts}.json`};
    }
    case 'csv':{
      const BOM='﻿';
      const esc=v=>'"'+String(v==null?'':v).replace(/"/g,'""')+'"';
      const text=BOM+[...BATCH_HEADERS,'fullAddr'].map(esc).join(',')+'\n'+rows.map(r=>[...BATCH_HEADERS,'fullAddr'].map(h=>esc(r[h])).join(',')).join('\n')+'\n';
      return {text,mime:'text/csv;charset=utf-8',filename:`addresses-${ts}.csv`};
    }
    case 'tsv':{
      const esc=v=>String(v==null?'':v).replace(/[\t\r\n]/g,' ');
      const text=[...BATCH_HEADERS,'fullAddr'].join('\t')+'\n'+rows.map(r=>[...BATCH_HEADERS,'fullAddr'].map(h=>esc(r[h])).join('\t')).join('\n')+'\n';
      return {text,mime:'text/tab-separated-values;charset=utf-8',filename:`addresses-${ts}.tsv`};
    }
    case 'excel':{
      // SpreadsheetML 2003 XML — opens natively in Excel / LibreOffice / Numbers.
      const xmlEsc=s=>String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
      const cell=v=>`<Cell><Data ss:Type="String">${xmlEsc(v)}</Data></Cell>`;
      const headRow='<Row>'+[...BATCH_HEADERS,'fullAddr'].map(h=>cell(h)).join('')+'</Row>';
      const dataRows=rows.map(r=>'<Row>'+[...BATCH_HEADERS,'fullAddr'].map(h=>cell(r[h])).join('')+'</Row>').join('');
      const text='<?xml version="1.0"?>\n<?mso-application progid="Excel.Sheet"?>\n<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"><Worksheet ss:Name="Addresses"><Table>'+headRow+dataRows+'</Table></Worksheet></Workbook>\n';
      return {text,mime:'application/vnd.ms-excel;charset=utf-8',filename:`addresses-${ts}.xml`};
    }
    case 'markdown':{
      const esc=v=>String(v==null?'':v).replace(/\|/g,'\\|').replace(/\r?\n/g,' ');
      const headers=[...BATCH_HEADERS,'fullAddr'];
      const sep=headers.map(()=>'---');
      const lines=['# Addresses','',`Generated ${rows.length} address(es) on ${new Date().toISOString().slice(0,10)}`,'','| '+headers.join(' | ')+' |','| '+sep.join(' | ')+' |'];
      for(const r of rows){lines.push('| '+headers.map(h=>esc(r[h])).join(' | ')+' |');}
      return {text:lines.join('\n')+'\n',mime:'text/markdown;charset=utf-8',filename:`addresses-${ts}.md`};
    }
    case 'txt':
    default:{
      const text=rows.map((r,i)=>`#${i+1}\n${r.firstName} ${r.lastName}\n${r.phone}\n${r.email}\n${r.fullAddr}`).join('\n\n')+'\n';
      return {text,mime:'text/plain;charset=utf-8',filename:`addresses-${ts}.txt`};
    }
  }
}

// ==================== 复制/保存 ====================
async function copyField(key,btn){
  const text=key==='fullAddr'?window.currentAddress.fullAddr:String(window.currentAddress[key]);
  await copyText(text);
  btn.innerHTML='✅';btn.classList.add('copied');
  setTimeout(()=>{btn.innerHTML='📋';btn.classList.remove('copied')},1500);
  showToast(t('copied'));
}

async function copyAll(){
  if(!window.currentAddress){showToast(t('no_data'));return}
  const addr=window.currentAddress;
  const text=addr.firstName+' '+addr.lastName+'\n'+addr.phone+'\n'+addr.email+'\n'+addr.fullAddr;
  await copyText(text);
  const btn=document.getElementById('copyAllBtn');
  btn.innerHTML='✅';btn.classList.add('copied');
  setTimeout(()=>{btn.innerHTML='📋 '+t('copy_all');btn.classList.remove('copied')},1500);
  showToast(t('copied'));
}

function saveAddress(){
  if(!window.currentAddress){showToast(t('no_data'));return}
  const saved=JSON.parse(localStorage.getItem('saved_addresses')||'[]');
  saved.push({...window.currentAddress,time:new Date().toISOString()});
  localStorage.setItem('saved_addresses',JSON.stringify(saved));
  renderSavedAddresses();
  showToast(t('saved'));
}

function deleteSavedAddress(index){
  const saved=JSON.parse(localStorage.getItem('saved_addresses')||'[]');
  saved.splice(index,1);
  localStorage.setItem('saved_addresses',JSON.stringify(saved));
  renderSavedAddresses();
}

function clearSavedAddresses(){
  if(!confirm(t('saved_confirm'))) return;
  localStorage.removeItem('saved_addresses');
  renderSavedAddresses();
}

function copySavedCard(btn,index){
  const saved=JSON.parse(localStorage.getItem('saved_addresses')||'[]');
  const a=saved[index];if(!a) return;
  const text=a.firstName+' '+a.lastName+'\n'+a.phone+'\n'+a.email+'\n'+a.street+'\n'+a.city+', '+a.state+' '+a.zip+'\n'+a.country;
  copyText(text);
  btn.textContent='✅';btn.classList.add('copied');
  setTimeout(()=>{btn.textContent='📋 '+t('copy_all');btn.classList.remove('copied')},1500);
  showToast(t('copied'));
}

function exportSavedCSV(){
  const saved=JSON.parse(localStorage.getItem('saved_addresses')||'[]');
  if(!saved.length){showToast(t('no_data'));return}
  const BOM='\uFEFF';
  const headers=['firstName','lastName','gender','phone','email','street','city','state','zip','fullAddr','time'];
  const rows=saved.map(a=>headers.map(h=>'"'+(a[h]||'').replace(/"/g,'""')+'"').join(','));
  const csv=BOM+headers.join(',')+'\n'+rows.join('\n');
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download='saved_addresses.csv';a.click();
  URL.revokeObjectURL(url);
}

function renderSavedAddresses(){
  const container=document.getElementById('savedAddressesBody');
  if(!container) return;
  const saved=JSON.parse(localStorage.getItem('saved_addresses')||'[]');
  const countEl=document.getElementById('savedCount');
  const emptyEl=document.getElementById('savedEmpty');
  const cardsEl=document.getElementById('savedCards');
  if(countEl) countEl.textContent=t('saved_count').replace('{n}',saved.length);
  if(!saved.length){
    if(emptyEl) emptyEl.style.display='block';
    if(cardsEl) cardsEl.style.display='none';
    return;
  }
  if(emptyEl) emptyEl.style.display='none';
  if(cardsEl) cardsEl.style.display='grid';
  cardsEl.innerHTML=saved.map((a,i)=>`
    <div class="saved-card">
      <div class="saved-card-header">
        <span class="saved-name">👤 ${escapeHtml(a.firstName)} ${escapeHtml(a.lastName)}</span>
        <span class="saved-gender">${escapeHtml(a.gender)}</span>
      </div>
      <div class="saved-card-body">
        <div class="saved-line"><span class="saved-label">📞</span><span class="saved-val">${escapeHtml(a.phone)}</span></div>
        <div class="saved-line"><span class="saved-label">📧</span><span class="saved-val">${escapeHtml(a.email)}</span></div>
        <div class="saved-line"><span class="saved-label">📍</span><span class="saved-val">${escapeHtml(a.street)}</span></div>
        <div class="saved-line"><span class="saved-label">🏙</span><span class="saved-val">${escapeHtml(a.city)}, ${escapeHtml(a.state)} ${escapeHtml(a.zip)}</span></div>
        <div class="saved-line"><span class="saved-label">🌍</span><span class="saved-val">${escapeHtml(a.country)}</span></div>
      </div>
      <div class="saved-card-footer">
        <span class="saved-time">${new Date(a.time).toLocaleString()}</span>
        <div class="saved-card-actions">
          <button class="saved-copy-btn" onclick="copySavedCard(this,${i})">📋 ${t('copy_all')}</button>
          <button class="saved-del-btn" onclick="deleteSavedAddress(${i})">🗑 ${t('saved_del')}</button>
        </div>
      </div>
    </div>
  `).join('');
}

// 页面加载时渲染已保存地址
document.addEventListener('DOMContentLoaded',()=>{
  renderSavedAddresses();
});

async function copyText(text){
  try{await navigator.clipboard.writeText(text);return true}
  catch{
    const ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.left='-999px';
    document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);return true;
  }
}

function escapeHtml(str){const d=document.createElement('div');d.textContent=str;return d.innerHTML}

function showToast(msg){
  const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2000);
}

function toggleFaq(q){
  const a=q.nextElementSibling;
  const isOpen=a.classList.contains('open');
  a.classList.toggle('open',!isOpen);
  q.classList.toggle('open',!isOpen);
}

// Init
renderCountrySelect();
// Wire batch controls (only if the batch UI is present in the page).
document.addEventListener('DOMContentLoaded',function(){
  const go=document.getElementById('batchGoBtn');
  const cp=document.getElementById('batchCopyBtn');
  const dl=document.getElementById('batchDownloadBtn');
  if(go) go.addEventListener('click',batchRun);
  if(cp) cp.addEventListener('click',batchCopy);
  if(dl) dl.addEventListener('click',batchDownload);
});