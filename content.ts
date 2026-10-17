export type PageId = "home" | "learn" | "checkout" | "worth" | "budget" | "challenge" | "progress" | "research"

export const navItems: { id: PageId label: string short: string }[] = [
  { id: "home", label: "Beranda — Kenali Dirimu", short: "Beranda" },
  { id: "learn", label: "Belajar Bijak", short: "Belajar" },
  { id: "checkout", label: "Cek Sebelum Checkout", short: "Cek" },
  { id: "worth", label: "Aku Berharga", short: "Refleksi" },
  { id: "budget", label: "Atur Uangku", short: "Anggaran" },
  { id: "challenge", label: "Tantangan 7 Hari", short: "Tantangan" },
  { id: "progress", label: "Perkembangan Diriku", short: "Progres" },
  { id: "research", label: "Riset dan Referensi", short: "Riset" },
]

export type ResearchId = "krisnanda-2023" | "wang-2020" | "zawadzka-2022"

export type ResearchArticle = {
  id: ResearchId
  citation: string
  authors: string
  year: number
  title: string
  journal: string
  publication: string
  doi: string
  articleUrl: string
  topics: string[]
  finding: string
  relevance: string
  caution: string
  reference: string
}

export const researchArticles: ResearchArticle[] = [
  {
    id: "krisnanda-2023",
    citation: "Krisnanda & Suhardita (2023)",
    authors: "Veno Dwi Krisnanda & Kadek Suhardita",
    year: 2023,
    title:
      "The Influence of Instagram Social Media on Hedonist Lifestyle in Indonesian Vocational School of Adolescents",
    journal: "Journal of Academia Perspectives",
    publication: "3(1), 37–45",
    doi: "https://doi.org/10.30998/jap.v3i1.1734",
    articleUrl: "https://journal.unindra.ac.id/index.php/jap/article/view/1734",
    topics: ["Media Sosial", "Gaya Hidup Hedonis"],
    finding:
      "Penelitian kuantitatif terhadap 70 remaja menemukan hubungan positif yang kuat antara penggunaan Instagram dan gaya hidup hedonis. Dalam model yang digunakan, artikel melaporkan kontribusi sebesar 54,76%.",
    relevance:
      "Temuan ini menjadi konteks untuk mengevaluasi paparan tren, perbandingan sosial, citra diri, serta alasan di balik keputusan konsumsi.",
    caution:
      "Hasil berasal dari sampel dan konteks tertentu. Temuan ini tidak berarti Instagram pasti menyebabkan gaya hidup hedonis pada setiap remaja.",
    reference:
      "Krisnanda, V. D., & Suhardita, K. (2023). The Influence of Instagram Social Media on Hedonist Lifestyle in Indonesian Vocational School of Adolescents. Journal of Academia Perspectives, 3(1), 37–45. https://doi.org/10.30998/jap.v3i1.1734",
  },
  {
    id: "wang-2020",
    citation: "Wang et al. (2020)",
    authors: "Pengcheng Wang, Li Lei, Guoliang Yu, & Biao Li",
    year: 2020,
    title:
      "Social Networking Sites Addiction and Materialism Among Chinese Adolescents: A Moderated Mediation Model Involving Depression and Need to Belong",
    journal: "Frontiers in Psychology",
    publication: "11, Article 581274",
    doi: "https://doi.org/10.3389/fpsyg.2020.581274",
    articleUrl:
      "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2020.581274/full",
    topics: ["Media Sosial", "Materialisme", "Penerimaan Sosial"],
    finding:
      "Studi terhadap 733 remaja di China menemukan bahwa kecanduan situs jejaring sosial dan kebutuhan untuk diterima berkaitan positif dengan materialisme. Depresi berperan sebagai mediator, sementara kebutuhan untuk diterima memperkuat beberapa hubungan dalam model penelitian.",
    relevance:
      "Temuan ini membantu membahas FOMO, tekanan mengikuti tren, perbandingan diri, dan keinginan memperoleh pengakuan sosial.",
    caution:
      "Materialisme dan gaya hidup hedonis adalah konsep yang berbeda meski dapat berkaitan. Penelitian ini juga tidak berarti media sosial selalu menyebabkan depresi atau materialisme.",
    reference:
      "Wang, P., Lei, L., Yu, G., & Li, B. (2020). Social Networking Sites Addiction and Materialism Among Chinese Adolescents: A Moderated Mediation Model Involving Depression and Need to Belong. Frontiers in Psychology, 11, Article 581274. https://doi.org/10.3389/fpsyg.2020.581274",
  },
  {
    id: "zawadzka-2022",
    citation: "Zawadzka et al. (2022)",
    authors:
      "Anna Maria Zawadzka, Tim Kasser, Małgorzata Niesiobędzka, Aleksandra Lewandowska-Walter, & Małgorzata Górnik-Durose",
    year: 2022,
    title:
      "Environmental Correlates of Adolescent’ Materialism: Interpersonal Role Models, Media Exposure, and Family Socio-economic Status",
    journal: "Journal of Child and Family Studies",
    publication: "31(5), 1427–1440",
    doi: "https://doi.org/10.1007/s10826-021-02180-2",
    articleUrl: "https://link.springer.com/article/10.1007/s10826-021-02180-2",
    topics: ["Materialisme", "Lingkungan Sosial", "Status Sosial Ekonomi"],
    finding:
      "Penelitian ini menemukan bahwa model peran dari orang tua, saudara, dan teman sebaya serta paparan media berhubungan positif dengan materialisme remaja. Hubungan status sosial ekonomi keluarga dengan materialisme juga signifikan pada sampel penelitian.",
    relevance:
      "Temuan ini memberi konteks untuk memahami pengaruh lingkungan, tekanan kelompok, pola konsumsi, dan perbedaan kemampuan ekonomi tanpa memberi label pada seseorang.",
    caution:
      "Status sosial ekonomi tidak dapat digunakan sendirian untuk menilai kepribadian, harga diri, atau perilaku. Hubungannya dengan materialisme dapat berbeda menurut konteks sosial dan budaya.",
    reference:
      "Zawadzka, A. M., Kasser, T., Niesiobędzka, M., Lewandowska-Walter, A., & Górnik-Durose, M. (2022). Environmental Correlates of Adolescent’ Materialism: Interpersonal Role Models, Media Exposure, and Family Socio-economic Status. Journal of Child and Family Studies, 31(5), 1427–1440. https://doi.org/10.1007/s10826-021-02180-2",
  },
]

export const getResearch = (...ids: ResearchId[]) =>
  researchArticles.filter((article) => ids.includes(article.id))

export const materials = [
  {
    icon: "spark",
    title: "Gaya Hidup Hedonis dan Pola Konsumsi",
    time: "6 menit",
    color: "sage",
    summary:
      "Pahami gaya hidup hedonis secara utuh dan kenali pola konsumsi yang dapat menyertainya.",
    body: "Gaya hidup hedonis adalah orientasi yang menempatkan kesenangan, pengalaman, prestise, atau pengakuan sosial sebagai hal penting. Perilaku konsumtif dapat menjadi salah satu bentuknya, tetapi keduanya bukan konsep yang sama. Konsumsi sendiri adalah bagian wajar dari kehidupan; yang penting adalah mengenali alasan dan dampak keputusan kita.",
    example:
      "Kamu membuka aplikasi belanja saat bosan, lalu memasukkan beberapa barang ke keranjang meski sebelumnya tidak berencana membeli.",
    reflection: "Dalam situasi apa kamu paling sering ingin berbelanja?",
    takeaway:
      "Kenali pola tanpa menyalahkan diri; kesadaran adalah langkah pertama.",
    researchIds: ["krisnanda-2023", "zawadzka-2022"] as ResearchId[],
  },
  {
    icon: "heart",
    title: "Kebutuhan dan Keinginan",
    time: "5 menit",
    color: "pink",
    summary:
      "Belajar membedakan prioritas tanpa menghilangkan ruang untuk menikmati hidup.",
    body: "Kebutuhan membantu kegiatan utama dan keseharian tetap berjalan. Keinginan boleh dipenuhi, selama disesuaikan dengan kemampuan dan tidak mengganggu prioritas.",
    example:
      "Sepatu sekolah yang rusak perlu diganti, sementara sepatu model terbaru mungkin bisa menunggu.",
    reflection:
      "Adakah keinginan yang masih terasa penting setelah ditunda dua hari?",
    takeaway:
      "Keinginan tidak salah; beri jeda agar keputusan terasa lebih mantap.",
    researchIds: [] as ResearchId[],
  },
  {
    icon: "trend",
    title: "FOMO dan Pengaruh Tren",
    time: "7 menit",
    color: "lavender",
    summary: "Pahami mengapa tren bisa membuat kita merasa harus segera ikut.",
    body: "FOMO adalah rasa khawatir tertinggal dari pengalaman orang lain. Konten yang berulang dan kebutuhan untuk merasa diterima dapat berkaitan dengan cara remaja melihat tren dan barang. Hubungan ini tidak berarti media sosial selalu menimbulkan dampak yang sama bagi setiap orang (Krisnanda & Suhardita, 2023; Wang et al., 2020).",
    example:
      "Hampir semua teman mengunggah produk yang sama, sehingga kamu merasa perlu memilikinya agar tetap nyambung.",
    reflection:
      "Apakah kamu tetap menginginkan barang itu jika tidak ada yang melihatnya?",
    takeaway:
      "Tren datang dan pergi; kebutuhan dan nilai dirimu tetap layak didengar.",
    researchIds: ["krisnanda-2023", "wang-2020"] as ResearchId[],
  },
  {
    icon: "pause",
    title: "Mengenali Pembelian Impulsif",
    time: "6 menit",
    color: "sage",
    summary: "Temukan cara memberi jeda sebelum menekan tombol beli.",
    body: "Pembelian impulsif terjadi cepat, sering kali tanpa rencana. Jeda singkat membantu kita mengecek alasan, kemampuan, dan dampaknya pada kebutuhan lain.",
    example:
      "Notifikasi diskon terbatas membuatmu takut kehilangan kesempatan, padahal barang itu belum pernah masuk rencana.",
    reflection:
      "Jeda seperti apa yang paling mudah kamu lakukan: 10 menit, satu malam, atau dua hari?",
    takeaway:
      "Jeda bukan larangan membeli, melainkan ruang untuk memilih dengan sadar.",
    researchIds: [] as ResearchId[],
  },
  {
    icon: "clock",
    title: "Memahami Risiko PayLater",
    time: "8 menit",
    color: "pink",
    summary:
      "Kenali tagihan, biaya, jatuh tempo, dan konsekuensinya sebelum memutuskan.",
    body: "PayLater membuat pembayaran terasa tertunda, tetapi kewajibannya tetap nyata. Penting memahami jumlah total, biaya, tanggal jatuh tempo, dan dampak keterlambatan.",
    example:
      "Harga terlihat ringan karena dibagi beberapa kali, tetapi total beberapa cicilan dapat mengurangi uang untuk kebutuhan bulan berikutnya.",
    reflection: "Apakah pembayaran berikutnya sudah masuk rencana uangmu?",
    takeaway:
      "Jangan lanjut jika detail biaya dan kemampuan membayar belum benar-benar jelas.",
    researchIds: [] as ResearchId[],
  },
  {
    icon: "wallet",
    title: "Mengelola Uang Sesuai Prioritas",
    time: "7 menit",
    color: "lavender",
    summary:
      "Susun alokasi yang realistis berdasarkan kondisi dan kemampuanmu.",
    body: "Anggaran sederhana membantu uang digunakan sesuai hal yang penting bagimu. Tidak ada nominal yang terlalu kecil untuk direncanakan.",
    example:
      "Kamu membagi uang mingguan untuk transportasi, makan, tabungan, lalu melihat ruang yang tersisa untuk keinginan.",
    reflection: "Prioritas apa yang paling perlu dijaga minggu ini?",
    takeaway:
      "Rencana yang fleksibel lebih berguna daripada rencana sempurna yang sulit dijalankan.",
    researchIds: ["zawadzka-2022"] as ResearchId[],
  },
  {
    icon: "flower",
    title: "Penerimaan Diri dan Perbandingan Sosial",
    time: "6 menit",
    color: "sage",
    summary:
      "Bangun cara pandang yang tidak mengukur diri dari barang dan penampilan.",
    body: "Apa yang terlihat dari orang lain hanyalah sebagian kecil hidup mereka. Lingkungan, paparan media, dan kebutuhan untuk diterima dapat berkaitan dengan materialisme, tetapi tidak menentukan nilai seseorang (Wang et al., 2020; Zawadzka et al., 2022). Nilai diri bertumbuh dari banyak hal: cara memperlakukan orang, usaha, keberanian, dan kepedulian.",
    example:
      "Melihat unggahan teman membuat hidupmu terasa kurang, meski kamu tidak mengetahui keseluruhan ceritanya.",
    reflection: "Kualitas diri apa yang kamu banggakan dan tidak bisa dibeli?",
    takeaway: "Nilai dirimu tidak ditentukan oleh apa yang kamu punya.",
    researchIds: ["wang-2020", "zawadzka-2022"] as ResearchId[],
  },
]

export const challengeDays = [
  [
    "Kenali Kebiasaan",
    "Amati satu konten yang memicu keinginan membeli dan catat apa yang kamu rasakan tanpa menyalahkan diri.",
  ],
  [
    "Bedakan Kebutuhan dan Keinginan",
    "Kelompokkan beberapa contoh pengeluaran sesuai prioritasmu.",
  ],
  [
    "Berhenti Sebelum Checkout",
    "Terapkan jeda sebelum membeli barang non-esensial.",
  ],
  [
    "Kenali Pengaruh Tren",
    "Kenali pengaruh tren atau teman sebaya pada pilihanmu tanpa menyalahkan diri sendiri.",
  ],
  [
    "Susun Anggaran Sederhana",
    "Buat rencana penggunaan uang berdasarkan kebutuhan dan kemampuan.",
  ],
  [
    "Hargai Diri",
    "Tuliskan hal yang membuatmu berharga selain barang atau status sosial.",
  ],
  [
    "Evaluasi",
    "Tinjau perubahan pemikiran dan satu kebiasaan yang ingin dilanjutkan.",
  ],
]
